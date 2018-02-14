import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import { ProjectModel } from '../../models/project.model';
import { WORKS_API } from '../../app-constants';

@Injectable()
export class WorksService {
  private worksUrl: string = WORKS_API;

  constructor(private http: HttpClient) {}

  getWorks(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(this.worksUrl)
      .pipe(map((response: any) => response.posts as ProjectModel[]));
  }
}
