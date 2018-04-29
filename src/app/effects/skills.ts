import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as skills from '../actions/skills';
import { SkillsService } from '../pages/skillspage/skills.service';
import { LoadSkillsError, LoadSkillsSuccess } from '../actions/skills';

@Injectable()
export class SkillsEffects {
  constructor(private actons$: Actions, private skillsService: SkillsService) {}

  @Effect()
  getSkills$: Observable<Action> = this.actons$
    .ofType<skills.LoadSkills>(skills.LOAD_SKILLS)
    .pipe(
      switchMap(() => this.skillsService.getSkills()
        .pipe(
          map(skillset => new LoadSkillsSuccess(skillset)),
          catchError(err => of(new LoadSkillsError(err)))
        )
      )
    );
}
