import {Component, OnInit} from '@angular/core';

import {ProjectModel} from "../../models/project.model";
import {WorksService} from "./works.service";

@Component({
  selector: 'workspage',
  templateUrl: './works.template.html',
  providers: [
    WorksService
  ]
})

export class WorkspageComponent implements OnInit {
  projects: ProjectModel[];

  constructor(private service: WorksService) {}

  ngOnInit() {
    console.log(123);
    this.service.getWorks()
      .then(projects => {
        // console.log(projects);
        this.projects = projects;
      });
  }
}
