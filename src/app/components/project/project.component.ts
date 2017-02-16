import {Component, Input} from '@angular/core';

import {ProjectModel} from '../../models/project.model';
import {PROJECT_IMAGE_WIDTH} from '../../app-constants';

@Component({
  selector: 'project',
  templateUrl: './project.component.html'
})

export class ProjectComponent {
  @Input()
  project: ProjectModel;

  getImage() {
    let featuredImage = this.project.featured_image ? `${this.project.featured_image}?w=${PROJECT_IMAGE_WIDTH}` : null;
    let attachments = this.project.attachments || {};
    let firstAttachment = attachments[Object.keys(attachments)[0]];
    return featuredImage || firstAttachment.thumbnails.medium || {};
  }
}
