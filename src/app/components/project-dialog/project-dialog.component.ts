import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

import { ProjectModel } from '../../models/project.model';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectDialogComponent implements OnInit {
  projectModel: ProjectModel;

  constructor(public dialogRef: MdDialogRef<ProjectDialogComponent>, @Inject(MD_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.projectModel = new ProjectModel(this.data);
  }

}
