import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactpageComponent } from './pages/contactpage/contact.component';
import { HomepageComponent } from './pages/homepage/home.component';
import { SkillspageComponent } from './pages/skillspage/skills.component';
import { WorkspageComponent } from './pages/workspage/works.component';

export const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
