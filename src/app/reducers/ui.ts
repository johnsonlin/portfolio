import { Actions, TOGGLE_SIDENAV, CLOSE_SIDENAV, OPEN_SIDENAV } from '../actions/ui';

const initialState = {
  sideNavOpened: false
};

export function reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case OPEN_SIDENAV:
      return {
        ...state,
        sideNavOpened: true
      };

    case CLOSE_SIDENAV:
      return {
        ...state,
        sideNavOpened: false
      };

    case TOGGLE_SIDENAV:
      return {
        ...state,
        sideNavOpened: !state.sideNavOpened
      };

    default:
      return state;
  }
}
