import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomepageComponent} from '../pages/homepage/home.component';
import {WorkspageComponent} from '../pages/workspage/works.component';
import {SkillspageComponent} from '../pages/skillspage/skills.component';
import {ContactpageComponent} from '../pages/contactpage/contact.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'works',
    component: WorkspageComponent
  },
  {
    path: 'skills',
    component: SkillspageComponent
  },
  {
    path: 'contact',
    component: ContactpageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutesModule {}
