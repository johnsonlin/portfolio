import { Component, Input, OnInit } from '@angular/core';

import {ProjectModel} from '../../models/project.model';
import {PROJECT_IMAGE_WIDTH} from '../../app-constants';

@Component({
  selector: 'project',
  templateUrl: './project.component.html'
})

export class ProjectComponent implements OnInit {
  @Input() project: any;
  projectModel: ProjectModel;

  ngOnInit() {
    this.projectModel = new ProjectModel(this.project);
  }

}
