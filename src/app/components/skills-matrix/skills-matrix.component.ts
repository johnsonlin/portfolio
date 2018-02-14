import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-skills-matrix',
  templateUrl: './skills-matrix.component.html',
  styleUrls: ['./skills-matrix.component.scss']
})
export class SkillsMatrixComponent implements OnInit, AfterViewInit {
  @Input() skillsets: any[] = [];

  constructor(private elm: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const canvasContainers = this.elm.nativeElement.querySelectorAll('.skillset__canvas');

    if (this.skillsets.length) {
      this.skillsets.forEach((item, i) => {
        let canvas = canvasContainers[i].querySelector('canvas');

        if (!canvas) {
          canvas = document.createElement('canvas');
          canvasContainers[i].appendChild(canvas);
          this.drawChart(canvas, item.type, item);
        }
      });
    }
  }

  drawChart(canvas, chartType, rawData) {
    const data = this.transformChartData(rawData.data);
    const ticks = {
      display: false,
      beginAtZero: true,
      stepSize: 1,
      max: 5
    };
    const pointLabels = {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontSize: 14
    };
    let scaleOptions;

    switch (chartType) {
      case 'horizontalBar':
        scaleOptions = {
          scales: {
            xAxes: [{
              ticks,
              pointLabels
            }]
          }
        };
        break;
      default:
        scaleOptions = {
          scale: {
            ticks,
            pointLabels
          }
        };
        break;
    }

    const chart = new Chart(canvas, {
      type: chartType,
      data,
      options: {
        legend: {
          display: false
        },
        ...scaleOptions
      }
    });
  }

  transformChartData(rawData) {
    const skillNames = Object.keys(rawData);

    return {
      labels: skillNames,
      datasets: [{
        backgroundColor: 'rgba(0, 188, 212, 0.5)',
        borderColor: '#00bcd4',
        pointBackgroundColor: '#00bcd4',
        data: skillNames.map(item => rawData[item])
      }]
    };
  }
}
