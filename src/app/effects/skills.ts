import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as skills from '../actions/skills';
import { LoadSkillsError, LoadSkillsSuccess } from '../actions/skills';
import { SkillsService } from '../pages/skillspage/skills.service';

@Injectable()
export class SkillsEffects {
  constructor(private actons$: Actions, private skillsService: SkillsService) {}

  @Effect()
  getSkills$: Observable<Action> = this.actons$
    .pipe(
      ofType<skills.LoadSkills>(skills.LOAD_SKILLS),
      switchMap(() => this.skillsService.getSkills()
        .pipe(
          map(skillset => new LoadSkillsSuccess(skillset)),
          catchError(err => of(new LoadSkillsError(err)))
        )
      )
    );
}
