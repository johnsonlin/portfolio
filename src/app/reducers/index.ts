import { ActionReducerMap } from '@ngrx/store';

import * as fromUi from './ui';
import * as fromWorks from './works';
import * as fromSkills from './skills';
import * as fromContact from './contact';

export interface State {
  ui: any;
  works: any;
  skills: any;
  contact: any;
}

export const reducers: ActionReducerMap<State> = {
  ui: fromUi.reducer,
  works: fromWorks.reducer,
  skills: fromSkills.reducer,
  contact: fromContact.reducer
};
