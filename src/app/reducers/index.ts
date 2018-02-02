import { ActionReducerMap } from '@ngrx/store';

import * as fromUi from './ui';
import * as fromWorks from './works';

export interface State {
  ui: any;
  works: any;
}

export const reducers: ActionReducerMap<State> = {
  ui: fromUi.reducer,
  works: fromWorks.reducer
};
