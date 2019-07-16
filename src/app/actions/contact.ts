import { Action } from '@ngrx/store';

export const SEND_MESSAGE = '[CONTACT] SEND_MESSAGE';
export const SEND_MESSAGE_SUCCESS = '[CONTACT] SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_ERROR = '[CONTACT] SEND_MESSAGE_ERROR';

export class SendMessage implements Action {
  readonly type = SEND_MESSAGE;

  constructor(public payload: any) {}
}

export class SendMessageSuccess implements Action {
  readonly type = SEND_MESSAGE_SUCCESS;

  constructor() {}
}

export class SendMessageError implements Action {
  readonly type = SEND_MESSAGE_ERROR;

  constructor(public payload: string) {}
}

export type Actions = SendMessage
  | SendMessageSuccess
  | SendMessageError;
