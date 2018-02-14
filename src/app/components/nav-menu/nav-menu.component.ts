import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ToggleSidenav } from '../../actions/ui';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  toggleSidenav() {
    this.store.dispatch(new ToggleSidenav());
  }
}
