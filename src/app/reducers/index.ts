import { ActionReducerMap } from '@ngrx/store';

import * as fromUi from './ui';

export interface State {
  ui: any;
}

export const reducers: ActionReducerMap<State> = {
  ui: fromUi.reducer
};
