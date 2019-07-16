import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as works from '../actions/works';
import { LoadWorksError, LoadWorksSuccess } from '../actions/works';
import { WorksService } from '../pages/workspage/works.service';

@Injectable()
export class WorksEffects {
  constructor(private actons$: Actions, private worksService: WorksService) {}

  @Effect()
  getWorks$: Observable<Action> = this.actons$
    .pipe(
      ofType<works.LoadWorks>(works.LOAD_WORKS),
      switchMap(() => this.worksService.getWorks()
        .pipe(
          map(worksList => new LoadWorksSuccess(worksList)),
          catchError(err => of(new LoadWorksError(err)))
        )
      )
    );
}
