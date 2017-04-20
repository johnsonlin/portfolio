import { PROJECT_IMAGE_WIDTH } from '../app-constants';

export class ProjectModel {
  title: string;
  attachments?: any;
  featured_image?: string;
  excerpt: string;

  /*constructor(project) {
    // Object.assign(this, project);
  }*/

  getImage() {
    let featuredImage = this.featured_image ? `${this.featured_image}?w=${PROJECT_IMAGE_WIDTH}` : null;
    let attachments = this.attachments || {};
    let firstAttachment = attachments[Object.keys(attachments)[0]];
    return featuredImage || firstAttachment.thumbnails.medium || {};
  }
}
