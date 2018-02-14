import { Actions, SEND_MESSAGE, SEND_MESSAGE_ERROR, SEND_MESSAGE_SUCCESS } from '../actions/contact';

const initialState = {
  messageSending: false,
  messageSent: false,
  messageSendError: null
};

export function reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messageSending: true,
        messageSent: false,
        messageSendError: null
      };

    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        messageSending: false,
        messageSent: true
      };

    case SEND_MESSAGE_ERROR:
      return {
        ...state,
        messageSending: false,
        messageSent: false,
        messageSendError: action.payload
      };

    default:
      return state;
  }
}
