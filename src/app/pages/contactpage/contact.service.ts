import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import {SEND_MESSAGE_API} from '../../app-constants';

@Injectable()
export class ContactService {
  private sendMessageUrl: string = SEND_MESSAGE_API;

  constructor(private http: Http) {}

  sendMessage(from: string, email: string, message: string) {
    console.log(from, email, message, 'sending message');
    return this.http.post(this.sendMessageUrl, {from, email, message}).toPromise();
  }
}
