import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { filter, switchMap, takeUntil } from 'rxjs/operators';

declare const Modernizr: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomepageComponent implements OnInit {
  @ViewChild('cube', { static: true }) cube: ElementRef;
  rotateX = 58;
  rotateY = 0;
  rotateZ = 46;
  mouseStartX = 0;
  mouseStartY = 0;
  controlVisible = false;
  routeChanging$: Observable<any>;

  constructor(private router: Router, private elm: ElementRef) {
  }

  ngOnInit() {
    if (Modernizr.csstransforms3d && Modernizr.preserve3d) {
      this.cubeTransform();
    }
  }

  cubeTransform() {
    this.cube.nativeElement.style.transform = `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`;
    this.routeChanging$ = this.router.events.pipe(filter(e => e instanceof NavigationStart));

    this.bindMouseEvents();
    this.bindTouchEvents();
  }

  bindMouseEvents() {
    const mousedown$ = fromEvent(this.elm.nativeElement, 'mousedown').pipe(takeUntil(this.routeChanging$));
    const mousemove$ = fromEvent(this.elm.nativeElement, 'mousemove').pipe(takeUntil(this.routeChanging$));
    const mouseup$ = fromEvent(this.elm.nativeElement, 'mouseup').pipe(takeUntil(this.routeChanging$));
    const mousedrag$ = mousedown$.pipe(switchMap(() => mousemove$.pipe(takeUntil(mouseup$))), takeUntil(this.routeChanging$));

    mousedown$.subscribe((e: MouseEvent) => this.moveStart(e.x, e.y));
    mousedrag$.subscribe((e: MouseEvent) => this.rotateCube(e.x, e.y));
    mouseup$.subscribe(this.moveEnd.bind(this));
  }

  bindTouchEvents() {
    if (Modernizr.touchevents) {
      const touchstart$ = fromEvent(this.elm.nativeElement, 'touchstart').pipe(takeUntil(this.routeChanging$));
      const touchmove$ = fromEvent(this.elm.nativeElement, 'touchmove').pipe(takeUntil(this.routeChanging$));
      const touchend$ = fromEvent(this.elm.nativeElement, 'touchend').pipe(takeUntil(this.routeChanging$));

      touchstart$.subscribe((e: TouchEvent) => {
        e.stopPropagation();
        this.moveStart(e.touches[0].clientX, e.touches[0].clientY);
      });
      touchmove$.subscribe((e: TouchEvent) => {
        e.stopPropagation();
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
