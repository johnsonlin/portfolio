import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { ProjectModel } from '../../models/project.model';
import { WORKS_API } from '../../app-constants';

@Injectable()
export class WorksService {
  private worksUrl: string = WORKS_API;

  constructor(private http: HttpClient) {}

  getWorks(): Promise<ProjectModel[]> {
    return this.http.get(this.worksUrl)
      .toPromise()
      .then((response: any) => response.posts as ProjectModel[])
      .catch(error => {
        return Promise.reject(error.message || error);
      });
  }
}
