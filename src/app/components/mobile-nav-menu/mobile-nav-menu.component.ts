import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CloseSidenav } from '../../actions/ui';

@Component({
  selector: 'app-mobile-nav-menu',
  templateUrl: './mobile-nav-menu.component.html',
  styleUrls: ['./mobile-nav-menu.component.scss']
})
export class MobileNavMenuComponent implements OnInit {
  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  closeSidenav() {
    this.store.dispatch(new CloseSidenav());
  }
}
