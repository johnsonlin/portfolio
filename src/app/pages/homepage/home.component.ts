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

  cubeTransform() {
    this.cube.nativeElement.style.transform = `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`;

    this.routeChanging$ = this.router.events.filter(e => e instanceof NavigationStart);
    const mousedown$ = Observable.fromEvent(document, 'mousedown').takeUntil(this.routeChanging$);
    const mousemove$ = Observable.fromEvent(document, 'mousemove').takeUntil(this.routeChanging$);
    const mouseup$ = Observable.fromEvent(document, 'mouseup').takeUntil(this.routeChanging$);
    const mousedrag$ = mousedown$.flatMap(() => mousemove$.takeUntil(mouseup$)).takeUntil(this.routeChanging$);

    mousedown$.subscribe((e: MouseEvent) => this.moveStart(e.x, e.y));
    mousedrag$.subscribe((e: MouseEvent) => this.rotateCube(e.x, e.y));
    mouseup$.subscribe(this.moveEnd.bind(this));

    this.bindTouchEvents();
  }

  bindTouchEvents() {
    if (Modernizr.touchevents) {
      const touchstart$ = Observable.fromEvent(document, 'touchstart').takeUntil(this.routeChanging$);
      const touchmove$ = Observable.fromEvent(document, 'touchmove').takeUntil(this.routeChanging$);
      const touchend$ = Observable.fromEvent(document, 'touchend').takeUntil(this.routeChanging$);

      touchstart$.subscribe((e: TouchEvent) => {
        this.moveStart(e.touches[0].clientX, e.touches[0].clientY);
      });
      touchmove$.subscribe((e: TouchEvent) => {
        this.rotateCube(e.touches[0].clientX, e.touches[0].clientY);
      });
      touchend$.subscribe((this.moveEnd.bind(this)));
    }
  }

  rotateCube(x, y) {
    const rotateXOffset = this.mouseStartX - x;
    const rotateYOffset = this.mouseStartY - y;

    this.rotateZ += rotateXOffset / 100;
    this.rotateX += rotateYOffset / 100;
    this.cube.nativeElement.style.transform = `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`;
  }

  moveStart(x, y) {
    this.mouseStartX = x;
    this.mouseStartY = y;
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
