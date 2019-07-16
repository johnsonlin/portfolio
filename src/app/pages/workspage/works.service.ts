import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { WORKS_API } from '../../app-constants';
import { ProjectModel } from '../../models/project.model';

@Injectable()
export class WorksService {
  private worksUrl: string = WORKS_API;

  constructor(private http: HttpClient) {}

  getWorks(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(this.worksUrl)
      .pipe(map((response: any) => response.posts as ProjectModel[]));
  }
}
