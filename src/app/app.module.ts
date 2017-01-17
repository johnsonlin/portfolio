import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material'

import {AppRoutesModule} from './app-routes.module';
import {AppComponent} from './app.component';
import {PortfolioNavComponent} from './components/nav/nav.component';
import {ProjectComponent} from './components/project/project.component';
import {HomepageComponent} from './pages/home/home.component';
import {WorkspageComponent} from './pages/works/works.component';
import {SkillspageComponent} from './pages/skills/skills.component';
import {ContactpageComponent} from './pages/contact/contact.component';
import {ContactFormComponent} from './components/contact-form/contact-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutesModule
  ],
  declarations: [
    AppComponent,
    PortfolioNavComponent,
    ProjectComponent,
    ContactFormComponent,
    HomepageComponent,
    WorkspageComponent,
    SkillspageComponent,
    ContactpageComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
