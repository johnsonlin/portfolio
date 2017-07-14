import { Component, Input, OnInit } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  @Input() sidenav: MdSidenav;

  constructor() { }

  ngOnInit() {
  }

}
