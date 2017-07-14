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
  submitSuccessful = false;
  submitError: any;

  constructor(private service: ContactService) {}

  ngOnInit() {

  }

  submitForm(formData: ContactInfoModel) {
    this.service.sendMessage(formData.fullName, formData.email, formData.message)
      .then(() => {
        this.submitSuccessful = true;
      })
      .catch((error) => {
        this.submitError = error;
      });
  }
}
