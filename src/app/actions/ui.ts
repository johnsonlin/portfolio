import { Action } from '@ngrx/store';

export const OPEN_SIDENAV = '[UI] OPEN_SIDENAV';
export const CLOSE_SIDENAV = '[UI] CLOSE_SIDENAV';

class OpenSidenav implements Action {
  readonly type = OPEN_SIDENAV;

  constructor() {}
}

class CloseSidenav implements Action {
  readonly type = CLOSE_SIDENAV;

  constructor() {}
}

export type Actions = OpenSidenav
  | CloseSidenav;