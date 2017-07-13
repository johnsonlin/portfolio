import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

declare const Modernizr: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './home.component.html'
})
export class HomepageComponent implements OnInit {
  rotateX = 58;
  rotateY = 0;
  rotateZ = 46;
  mouseStartX = 0;
  mouseStartY = 0;
  controlVisible = false;
  routeChanging$: Observable<NavigationStart>;
  @ViewChild('cube') cube: ElementRef;

  constructor(private router: Router) {}

  ngOnInit() {
    if (Modernizr.csstransforms3d && Modernizr.preserve3d) {
      this.cubeTransform();
    }
  }

  private cubeTransform() {
    this.cube.nativeElement.style.transform = `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`;

    this.routeChanging$ = this.router.events.filter(e => e instanceof NavigationStart);
    const mousedown$ = Observable.fromEvent(document, 'mousedown').takeUntil(this.routeChanging$);
    const mousemove$ = Observable.fromEvent(document, 'mousemove').takeUntil(this.routeChanging$);
    const mouseup$ = Observable.fromEvent(document, 'mouseup').takeUntil(this.routeChanging$);
    const mousedrag$ = mousedown$.flatMap(() => mousemove$.takeUntil(mouseup$)).takeUntil(this.routeChanging$);

    mousedown$.subscribe(this.moveStart.bind(this));
    mousedrag$.subscribe((e: MouseEvent) => {
      const rotateXOffset = this.mouseStartX - e.x;
      const rotateYOffset = this.mouseStartY - e.y;

      this.rotateZ += rotateXOffset / 100;
      this.rotateX += rotateYOffset / 100;
      this.cube.nativeElement.style.transform = `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`;
    });
    mouseup$.subscribe(this.moveEnd.bind(this));
  }

  moveStart(e: MouseEvent) {
    this.mouseStartX = e.x;
    this.mouseStartY = e.y;
    this.cube.nativeElement.classList.add('cube--moving');
  }

  moveEnd() {
    this.cube.nativeElement.classList.remove('cube--moving');
  }

  rotateUp() {
    this.rotateX += 90;
    this.cube.nativeElement.style.transform = `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`;
  }

  rotateDown() {
    this.rotateX -= 90;
    this.cube.nativeElement.style.transform = `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`;
  }

  rotateLeft() {
    this.rotateZ += 90;
    this.cube.nativeElement.style.transform = `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`;
  }

  rotateRight() {
    this.rotateZ -= 90;
    this.cube.nativeElement.style.transform = `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`;
  }
}
