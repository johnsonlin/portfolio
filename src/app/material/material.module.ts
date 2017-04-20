import { NgModule } from '@angular/core';
import {
  MdSidenavModule, MdProgressSpinnerModule, MdButtonModule, MdIconModule,
  MdInputModule, MdGridListModule, MdDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MdSidenavModule,
    MdProgressSpinnerModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdGridListModule,
    MdDialogModule
  ],
  exports: [
    MdSidenavModule,
    MdProgressSpinnerModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdGridListModule,
    MdDialogModule
  ]
})
export class MaterialModule {
}
