import { NgModule } from '@angular/core';
import {
  MdSidenavModule, MdProgressBarModule, MdButtonModule, MdIconModule,
  MdInputModule, MdGridListModule, MdDialogModule, MdButtonToggleModule
} from '@angular/material';

@NgModule({
  imports: [
    MdSidenavModule,
    MdProgressBarModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdIconModule,
    MdInputModule,
    MdGridListModule,
    MdDialogModule
  ],
  exports: [
    MdSidenavModule,
    MdProgressBarModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdIconModule,
    MdInputModule,
    MdGridListModule,
    MdDialogModule
  ]
})
export class MaterialModule {
}
