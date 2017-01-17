import {Component, EventEmitter, Output} from '@angular/core';

import {ContactInfoModel} from '../../models/contact-info.model';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.template.html'
})

export class ContactFormComponent {
  contactInfo: ContactInfoModel = new ContactInfoModel();
  @Output() onFormSubmit = new EventEmitter();

  submitForm() {
    this.onFormSubmit.emit(this.contactInfo);
  }
}
