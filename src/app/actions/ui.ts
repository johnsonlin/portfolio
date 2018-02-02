import { Action } from '@ngrx/store';

export const TOGGLE_SIDENAV = '[UI] TOGGLE_SIDENAV';
export const OPEN_SIDENAV = '[UI] OPEN_SIDENAV';
export const CLOSE_SIDENAV = '[UI] CLOSE_SIDENAV';

export class ToggleSidenav implements Action {
  readonly type = TOGGLE_SIDENAV;

  constructor() {}
}

export class OpenSidenav implements Action {
  readonly type = OPEN_SIDENAV;

  constructor() {}
}

export class CloseSidenav implements Action {
  readonly type = CLOSE_SIDENAV;

  constructor() {}
}

export type Actions = ToggleSidenav
  | OpenSidenav
  | CloseSidenav;
