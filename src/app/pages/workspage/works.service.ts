import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/rx';

import { ProjectModel } from '../../models/project.model';
import { WORKS_API } from '../../app-constants';

@Injectable()
export class WorksService {
  private worksUrl: string = WORKS_API;

  constructor(private http: HttpClient) {}

  getWorks(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(this.worksUrl);
  }
}
