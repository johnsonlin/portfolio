import { Action } from '@ngrx/store';

export const LOAD_WORKS = '[WORKS] LOAD_WORKS';
export const LOAD_WORKS_SUCCESS = '[WORKS] LOAD_WORKS_SUCCESS';
export const LOAD_WORKS_ERROR = '[WORKS] LOAD_WORKS_ERROR';

export class LoadWorks implements Action {
  readonly type = LOAD_WORKS;

  constructor() {}
}

export class LoadWorksSuccess implements Action {
  readonly type = LOAD_WORKS_SUCCESS;

  constructor(public payload: any[]) {}
}

export class LoadWorksError implements Action {
  readonly type = LOAD_WORKS_ERROR;

  constructor(public payload: string) {}
}

export type Actions = LoadWorks
  | LoadWorksSuccess
  | LoadWorksError;
