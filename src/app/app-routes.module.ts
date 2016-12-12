import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {HomepageComponent} from './pages/home/home.component';
import {WorkspageComponent} from './pages/works/works.component';

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