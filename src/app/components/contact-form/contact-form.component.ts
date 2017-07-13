import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import {ContactInfoModel} from '../../models/contact-info.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent {
  contactInfo: ContactInfoModel = new ContactInfoModel();
  @Output() onFormSubmit = new EventEmitter();

  submitForm(contactForm: NgForm) {
    if (contactForm.valid) {
      this.onFormSubmit.emit(this.contactInfo);
    }
  }
}
