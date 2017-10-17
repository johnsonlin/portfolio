import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { ProjectModel } from '../../models/project.model';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectDialogComponent implements OnInit {
  projectModel: ProjectModel;

  constructor(public dialogRef: MatDialogRef<ProjectDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.projectModel = new ProjectModel(this.data);
  }

}
