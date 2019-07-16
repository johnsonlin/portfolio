import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map, takeUntil } from 'rxjs/operators';

import { CloseSidenav } from './actions/ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  sideNavOpened$: Observable<boolean>;
  destroy$ = new Subject<boolean>();

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.sideNavOpened$ = this.store.select('ui').pipe(map(state => state.sideNavOpened));

    this.sideNavOpened$
      .pipe(
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe((opened) => {
        if (opened) {
          this.sidenav.open();
        } else {
          this.sidenav.close();
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  closeSidenav() {
    this.store.dispatch(new CloseSidenav());
  }
}
