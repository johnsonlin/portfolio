import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { MOBILE_BREAK_POINT, GRID_COLS_DESKTOP, GRID_COLS_MOBILE } from '../../app-constants';
import { ProjectModel } from "../../models/project.model";
import { WorksService } from "./works.service";

@Component({
  selector: 'workspage',
  templateUrl: './works.component.html',
  providers: [
    WorksService
  ]
})

export class WorkspageComponent implements OnInit {
  projects: ProjectModel[] = [];
  gridSettings: any = {cols: GRID_COLS_MOBILE};
  routeChanging$: Observable<NavigationStart>;

  constructor(private service: WorksService, private router: Router) {}

  ngOnInit() {
    this.service.getWorks()
      .then(projects => {
        this.projects = projects.map((project) => {
          return project;
        });
      });

    this.routeChanging$ = this.router.events.filter(e => e instanceof NavigationStart);

    Observable.merge(
      Observable.of(window.innerWidth),
      Observable.fromEvent<UIEvent>(window, 'resize').map(() => window.innerWidth)
    )
      .debounceTime(500)
      .takeUntil(this.routeChanging$)
      .subscribe((innerWidth) => {
        this.gridSettings.cols = innerWidth > MOBILE_BREAK_POINT ? GRID_COLS_DESKTOP : GRID_COLS_MOBILE;
      });
  }
}
