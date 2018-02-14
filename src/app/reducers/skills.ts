import { Actions, LOAD_SKILLS, LOAD_SKILLS_ERROR, LOAD_SKILLS_SUCCESS } from '../actions/skills';

const initialState = {
  skills: null,
  skillsLoading: false,
  skillsLoaded: false,
  skillsLoadError: null
};

export function reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case LOAD_SKILLS:
      return {
        ...state,
        skillsLoading: true,
        skillsLoaded: false,
        skillsLoadError: null
      };

    case LOAD_SKILLS_SUCCESS:
      return {
        ...state,
        skillsLoading: false,
        skillsLoaded: true,
        skills: action.payload
      };

    case LOAD_SKILLS_ERROR:
      return {
        ...state,
        skillsLoading: false,
        skillsLoaded: false,
        skillsLoadError: action.payload
      };

    default:
      return state;
  }
}
