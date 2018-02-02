import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/rx';

import * as works from '../actions/works';
import { WorksService } from '../pages/workspage/works.service';
import { LoadWorksError, LoadWorksSuccess } from '../actions/works';

@Injectable()
export class WorksEffects {
  constructor(private actons$: Actions, private worksService: WorksService) {}

  @Effect()
  getWorks$: Observable<Action> = this.actons$
    .ofType<works.LoadWorks>(works.LOAD_WORKS)
    .switchMap(() => this.worksService.getWorks()
      .map(worksList => new LoadWorksSuccess(worksList))
      .catch(err => Observable.of(new LoadWorksError(err)))
    );
}