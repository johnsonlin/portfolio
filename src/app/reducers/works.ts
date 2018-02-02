import { Actions, LOAD_WORKS, LOAD_WORKS_ERROR, LOAD_WORKS_SUCCESS } from '../actions/works';

const initialState = {
  works: [],
  worksLoading: false,
  worksLoaded: false,
  worksLoadError: null
};

export function reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case LOAD_WORKS:
      return {
        ...state,
        worksLoading: true,
        worksLoaded: false,
        worksLoadError: null
      };

    case LOAD_WORKS_SUCCESS:
      return {
        ...state,
        worksLoading: false,
        worksLoaded: true
      };

    case LOAD_WORKS_ERROR:
      return {
        ...state,
        worksLoading: false,
        worksLoaded: false,
        worksLoadError: action.payload
      };

    default:
      return state;
  }
}
