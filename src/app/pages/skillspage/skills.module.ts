import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SkillsMatrixComponent } from '../../components/skills-matrix/skills-matrix.component';
import { SkillsEffects } from '../../effects/skills';
import { MaterialModule } from '../../material/material.module';
import { reducer } from '../../reducers/skills';

import { SkillspageComponent } from './skills.component';
import { SkillsService } from './skills.service';

@NgModule({
  declarations: [
    SkillspageComponent,
    SkillsMatrixComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('skills', reducer),
    EffectsModule.forFeature([SkillsEffects]),
    RouterModule.forChild([{
      path: '',
      component: SkillspageComponent,
    }]),
  ],
  providers: [
    SkillsService,
  ]
})
export class SkillsModule {
}
