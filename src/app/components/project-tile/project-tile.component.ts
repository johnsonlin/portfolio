import { Component, Input, OnInit } from '@angular/core';

import { ProjectModel } from '../../models/project.model';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.scss']
})
export class ProjectTileComponent implements OnInit {
  @Input() project: any;
  projectModel: ProjectModel;

  constructor() {
  }

  ngOnInit() {
    this.projectModel = new ProjectModel(this.project);
  }

}
