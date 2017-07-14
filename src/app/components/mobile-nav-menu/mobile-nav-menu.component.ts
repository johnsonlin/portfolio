import { Component, Input, OnInit } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-mobile-nav-menu',
  templateUrl: './mobile-nav-menu.component.html',
  styleUrls: ['./mobile-nav-menu.component.scss']
})
export class MobileNavMenuComponent implements OnInit {
  @Input() sidenav: MdSidenav;

  constructor() { }

  ngOnInit() {
  }

}
