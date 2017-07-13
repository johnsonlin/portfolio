import {Component, OnInit} from '@angular/core';

import {ContactService} from './contact.service';
import {ContactInfoModel} from '../../models/contact-info.model';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contact.component.html',
  providers: [
    ContactService
  ]
})
export class ContactpageComponent implements OnInit {

  constructor(private service: ContactService) {}

  ngOnInit() {

  }

  submitForm(formData: ContactInfoModel) {
    console.log('submitForm', formData);
    /*this.service.sendMessage(formData.fullName, formData.email, formData.message)
      .then(() => {
        console.log('sent');
      }, (error) => {
        console.warn(error);
      });*/
  }
}
