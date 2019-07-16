import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/homepage/home.module').then((mod) => mod.HomeModule)
  },
  {
    path: 'works',
    loadChildren: () => import('./pages/workspage/works.module').then((mod) => mod.WorksModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('./pages/skillspage/skills.module').then((mod) => mod.SkillsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contactpage/contact.module').then((mod) => mod.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
