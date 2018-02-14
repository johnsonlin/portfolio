import { Action } from '@ngrx/store';

export const LOAD_SKILLS = '[SKILLS] LOAD_SKILLS';
export const LOAD_SKILLS_SUCCESS= '[SKILLS] LOAD_SKILLS_SUCCESS';
export const LOAD_SKILLS_ERROR = '[SKILLS] LOAD_SKILLS_ERROR';

export class LoadSkills implements Action {
  readonly type = LOAD_SKILLS;

  constructor() {}
}

export class LoadSkillsSuccess implements Action {
  readonly type = LOAD_SKILLS_SUCCESS;

  constructor(public payload: any) {}
}

export class LoadSkillsError implements Action {
  readonly type = LOAD_SKILLS_ERROR;

  constructor(public payload: string) {}
}

export type Actions = LoadSkills
  | LoadSkillsSuccess
  | LoadSkillsError;
