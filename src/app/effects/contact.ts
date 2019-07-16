import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as contact from '../actions/contact';
import { SendMessageError, SendMessageSuccess } from '../actions/contact';
import { ContactInfoModel } from '../models/contact-info.model';
import { ContactService } from '../pages/contactpage/contact.service';

@Injectable()
export class ContactEffects {
  constructor(private actons$: Actions, private contactService: ContactService) {}

  @Effect()
  getContact$: Observable<Action> = this.actons$
    .pipe(
      ofType<contact.SendMessage>(contact.SEND_MESSAGE),
      map(action => action.payload),
      switchMap(({from, email, message}: ContactInfoModel) => this.contactService.sendMessage(from, email, message)
        .pipe(
          map(() => new SendMessageSuccess()),
          catchError(err => of(new SendMessageError(err)))
        )
      )
    );
}
