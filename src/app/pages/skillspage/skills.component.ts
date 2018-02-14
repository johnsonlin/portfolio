import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { LoadSkills } from '../../actions/skills';

@Component({
  selector: 'app-skillspage',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillspageComponent implements OnInit {
  skillsetConfig = [
    { name: 'Frontend Essential', type: 'radar' },
    { name: 'Frontend Advanced', type: 'radar' },
    { name: 'Backend', type: 'radar' },
    { name: 'Development Tools', type: 'radar' },
    { name: 'Application', type: 'horizontalBar' },
    { name: 'Language', type: 'horizontalBar' }
  ];
  skillsLoading$: Observable<boolean>;
  skills$: Observable<any>;
  skillsLoadError$: Observable<string>;

  constructor(private store: Store<any>) {

  }

  ngOnInit() {
    /*this.service.getSkills()
      .then((skills) => {
        this.skillsets = this.skillsetConfig.map((item) => Object.assign({}, item, {data: skills[item.name]}));
      })
      .catch((err) => {
        console.log(err);
      });*/

    this.skillsLoading$ = this.store.select('skills').pipe(map(state => state.skillsLoading));
    this.skills$ = this.store.select('skills').pipe(
      distinctUntilChanged(),
      map(state => {
        return this.skillsetConfig.map((item) => ({...item, data: state.skills[item.name]}));
      })
    );
    this.skillsLoadError$ = this.store.select('skills').pipe(map(state => state.skillsLoadError));

    this.store.dispatch(new LoadSkills());
  }
}
