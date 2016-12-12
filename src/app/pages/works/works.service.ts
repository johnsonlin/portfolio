import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import {ProjectModel} from "../../models/project.model";
import {WORKS_API} from '../../app-constants';

@Injectable()
export class WorksService {
  private worksUrl: string = WORKS_API;

  constructor(private http: Http) {}

  getWorks(): Promise<ProjectModel[]> {
    return this.http.get(this.worksUrl)
      .toPromise()
      .then(response => response.json().posts as ProjectModel[])
      .catch(error => {
        return Promise.reject(error.message || error)
      });
  }
}
