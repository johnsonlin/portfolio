import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';

import {ContactInfoModel} from '../../models/contact-info.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent {
  contactInfo: ContactInfoModel = new ContactInfoModel();
  submitting = false;
  @Input() submitSuccessful = false;
  @Input() submitError: any;
  @Output() onFormSubmit = new EventEmitter();

  submitForm(contactForm: NgForm) {
    if (contactForm.valid) {
      this.submitting = true;
      this.onFormSubmit.emit(this.contactInfo);
    }
  }
}
