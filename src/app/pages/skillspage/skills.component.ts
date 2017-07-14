import {Component, OnInit} from '@angular/core';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skillspage',
  templateUrl: './skills.component.html',
  providers: [SkillsService]
})
export class SkillspageComponent implements OnInit {
  skills: any;

  constructor(private service: SkillsService) {

  }

  ngOnInit() {
    this.service.getSkills()
      .then((skills) => {
        console.log(skills);
        this.skills = skills;
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
