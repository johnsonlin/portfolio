import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import Chart from 'chart.js';

import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skillspage',
  templateUrl: './skills.component.html',
  providers: [SkillsService]
})
export class SkillspageComponent implements OnInit, AfterViewChecked {
  skillsets: any[] = [];
  skillsetConfig = [
    { name: 'Frontend Essential', type: 'radar' },
    { name: 'Frontend Advanced', type: 'radar' },
    { name: 'Backend', type: 'radar' },
    { name: 'Development Tools', type: 'radar' },
    { name: 'Application', type: 'horizontalBar' },
    { name: 'Language', type: 'horizontalBar' }
  ];

  constructor(private service: SkillsService, private elm: ElementRef) {

  }

  ngOnInit() {
    this.service.getSkills()
      .then((skills) => {
        this.skillsets = this.skillsetConfig.map((item) => Object.assign({}, item, {data: skills[item.name]}));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  ngAfterViewChecked() {
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
    let scaleOptions;

    switch (chartType) {
      case 'horizontalBar':
        scaleOptions = {
          scales: {
            xAxes: [{
              ticks: {
                beginAtZero: true,
                max: 5
              }
            }]
          }
        };
        break;
      default:
        scaleOptions = {
          scale: {
            ticks: {
              beginAtZero: true,
              max: 5
            }
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
        data: skillNames.map(item => rawData[item])
      }]
    };
  }
}
