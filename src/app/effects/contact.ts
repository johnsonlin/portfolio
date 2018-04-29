import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as contact from '../actions/contact';
import { ContactService } from '../pages/contactpage/contact.service';
import { SendMessageError, SendMessageSuccess } from '../actions/contact';
import { ContactInfoModel } from '../models/contact-info.model';

@Injectable()
export class ContactEffects {
  constructor(private actons$: Actions, private contactService: ContactService) {}

  @Effect()
  getContact$: Observable<Action> = this.actons$
    .ofType<contact.SendMessage>(contact.SEND_MESSAGE)
    .pipe(
      map(action => action.payload),
      switchMap(({from, email, message}: ContactInfoModel) => this.contactService.sendMessage(from, email, message)
        .pipe(
          map(() => new SendMessageSuccess()),
          catchError(err => of(new SendMessageError(err)))
        )
      )
    );
}
