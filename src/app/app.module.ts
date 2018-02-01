import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ProjectDialogComponent } from './components/project-dialog/project-dialog.component';
import { ProjectTileComponent } from './components/project-tile/project-tile.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MobileNavMenuComponent } from './components/mobile-nav-menu/mobile-nav-menu.component';
import { HomepageComponent } from './pages/homepage/home.component';
import { WorkspageComponent } from './pages/workspage/works.component';
import { SkillspageComponent } from './pages/skillspage/skills.component';
import { ContactpageComponent } from './pages/contactpage/contact.component';

import { reducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    HomepageComponent,
    WorkspageComponent,
    SkillspageComponent,
    ContactpageComponent,
    ProjectDialogComponent,
    ProjectTileComponent,
    NavMenuComponent,
    MobileNavMenuComponent
  ],
  imports: [
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    MaterialModule,
    AppRoutingModule
  ],
  entryComponents: [
    ProjectDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
