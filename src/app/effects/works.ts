import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as works from '../actions/works';
import { WorksService } from '../pages/workspage/works.service';
import { LoadWorksError, LoadWorksSuccess } from '../actions/works';

@Injectable()
export class WorksEffects {
  constructor(private actons$: Actions, private worksService: WorksService) {}

  @Effect()
  getWorks$: Observable<Action> = this.actons$
    .ofType<works.LoadWorks>(works.LOAD_WORKS)
    .pipe(
      switchMap(() => this.worksService.getWorks()
        .pipe(
          map(worksList => new LoadWorksSuccess(worksList)),
          catchError(err => of(new LoadWorksError(err)))
        )
      )
    );
}
