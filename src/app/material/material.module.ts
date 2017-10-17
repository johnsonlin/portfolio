import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatButtonToggleModule, MatDialogModule, MatGridListModule, MatIconModule, MatInputModule,
  MatProgressBarModule, MatSidenavModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatProgressBarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule
  ],
  exports: [
    MatSidenavModule,
    MatProgressBarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule
  ]
})
export class MaterialModule {
}
