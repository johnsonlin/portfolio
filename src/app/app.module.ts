import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from './material/material.module';
import { AppRoutesModule } from './app-routes/app-routes.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HomepageComponent } from './pages/homepage/home.component';
import { WorkspageComponent } from './pages/workspage/works.component';
import { SkillspageComponent } from './pages/skillspage/skills.component';
import { ContactpageComponent } from './pages/contactpage/contact.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ContactFormComponent,
    HomepageComponent,
    WorkspageComponent,
    SkillspageComponent,
    ContactpageComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutesModule
  ],
  entryComponents: [
    ProjectDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
