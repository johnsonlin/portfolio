import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/rx';
import { filter, map } from 'rxjs/operators';

import { MOBILE_BREAK_POINT, GRID_COLS_DESKTOP, GRID_COLS_MOBILE } from '../../app-constants';
import { ProjectModel } from '../../models/project.model';
import { WorksService } from './works.service';
import { ProjectDialogComponent } from '../../components/project-dialog/project-dialog.component';
import { LoadWorks } from '../../actions/works';

@Component({
  selector: 'app-workspage',
  templateUrl: './works.component.html',
  providers: [
    WorksService
  ]
})
export class WorkspageComponent implements OnInit {
  projects: ProjectModel[] = [];
  gridSettings: any = {cols: GRID_COLS_MOBILE};
  routeChanging$: Observable<any>;
  worksLoading$: Observable<boolean>;
  works$: Observable<ProjectModel[]>;
  worksLoadError$: Observable<string>;

  constructor(private store: Store<any>, private router: Router, private dialog: MatDialog) {}

  ngOnInit() {
    this.routeChanging$ = this.router.events.pipe(filter(e => e instanceof NavigationStart));
    this.worksLoading$ = this.store.select('works').pipe(map(state => state.worksLoading));
    this.works$ = this.store.select('works').pipe(map(state => state.works));
    this.worksLoadError$ = this.store.select('works').pipe(map(state => state.worksLoadError));

    this.setupGrid();
    this.store.dispatch(new LoadWorks());
  }

  setupGrid() {
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

  showProjectDetails(project) {
    this.dialog.open(ProjectDialogComponent, {
      data: project
    });
  }
}
