import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { SKILLS_API } from '../../app-constants';

@Injectable()
export class SkillsService {
  private skillsUrl: string = SKILLS_API;

  constructor(private http: HttpClient) { }

  getSkills() {
    return this.http.get(this.skillsUrl)
      .toPromise()
      .then(skillsData => {
        return skillsData || {};
      })
      .catch(error => {
        return Promise.reject(error.message || error);
      });
  }
}
