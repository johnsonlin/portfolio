import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { ContactEffects } from '../../effects/contact';
import { MaterialModule } from '../../material/material.module';
import { reducer } from '../../reducers/contact';

import { ContactpageComponent } from './contact.component';
import { ContactService } from './contact.service';

@NgModule({
  declarations: [
    ContactpageComponent,
    ContactFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    StoreModule.forFeature('contact', reducer),
    EffectsModule.forFeature([ContactEffects]),
    RouterModule.forChild([{
      path: '',
      component: ContactpageComponent,
    }]),
  ],
  providers: [
    ContactService,
  ],
})
export class ContactModule {
}
