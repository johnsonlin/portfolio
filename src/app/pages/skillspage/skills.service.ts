import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { SKILLS_API } from '../../app-constants';

@Injectable()
export class SkillsService {
  private skillsUrl: string = SKILLS_API;

  constructor(private http: Http) { }

  getSkills() {
    return this.http.get(this.skillsUrl)
      .toPromise()
      .then(response => {
        const skillsData = response.json();
        return (skillsData && skillsData[0]) || [];
      })
      .catch(error => {
        return Promise.reject(error.message || error);
      });
  }
}
