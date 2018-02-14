import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { ProjectModel } from '../../models/project.model';
import { LoadWorks } from '../../actions/works';

@Component({
  selector: 'app-workspage',
  templateUrl: './works.component.html'
})
export class WorkspageComponent implements OnInit {
  worksLoading$: Observable<boolean>;
  projects$: Observable<ProjectModel[]>;
  worksLoadError$: Observable<string>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.worksLoading$ = this.store.select('works').pipe(map(state => state.worksLoading));
    this.projects$ = this.store.select('works').pipe(map(state => state.works));
    this.worksLoadError$ = this.store.select('works').pipe(map(state => state.worksLoadError));

    this.store.dispatch(new LoadWorks());
  }

}
