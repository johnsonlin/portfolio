import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../material/material.module';

import { HomepageComponent } from './home.component';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([{
      path: '',
      component: HomepageComponent
    }])
  ]
})
export class HomeModule { }
