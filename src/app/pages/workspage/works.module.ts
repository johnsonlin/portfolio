import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProjectDialogComponent } from '../../components/project-dialog/project-dialog.component';
import { ProjectGridComponent } from '../../components/project-grid/project-grid.component';
import { ProjectTileComponent } from '../../components/project-tile/project-tile.component';
import { WorksEffects } from '../../effects/works';
import { MaterialModule } from '../../material/material.module';
import { reducer } from '../../reducers/works';

import { WorkspageComponent } from './works.component';
import { WorksService } from './works.service';

@NgModule({
  declarations: [
    WorkspageComponent,
    ProjectDialogComponent,
    ProjectTileComponent,
    ProjectGridComponent,
  ],
  entryComponents: [
    ProjectDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('works', reducer),
    EffectsModule.forFeature([WorksEffects]),
    RouterModule.forChild([{
      path: '',
      component: WorkspageComponent
    }])
  ],
  providers: [
    WorksService,
  ]
})
export class WorksModule { }
