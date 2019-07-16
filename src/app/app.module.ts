import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { MobileNavMenuComponent } from './components/mobile-nav-menu/mobile-nav-menu.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { ProjectDialogComponent } from './components/project-dialog/project-dialog.component';
import { ProjectGridComponent } from './components/project-grid/project-grid.component';
import { ProjectTileComponent } from './components/project-tile/project-tile.component';
import { SkillsMatrixComponent } from './components/skills-matrix/skills-matrix.component';
import { ContactEffects } from './effects/contact';
import { SkillsEffects } from './effects/skills';
import { WorksEffects } from './effects/works';
import { MaterialModule } from './material/material.module';
import { ContactpageComponent } from './pages/contactpage/contact.component';
import { ContactService } from './pages/contactpage/contact.service';
import { HomepageComponent } from './pages/homepage/home.component';
import { SkillspageComponent } from './pages/skillspage/skills.component';
import { SkillsService } from './pages/skillspage/skills.service';
import { WorkspageComponent } from './pages/workspage/works.component';
import { WorksService } from './pages/workspage/works.service';
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
    MobileNavMenuComponent,
    ProjectGridComponent,
    SkillsMatrixComponent
  ],
  imports: [
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([WorksEffects, SkillsEffects, ContactEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MaterialModule,
    AppRoutingModule
  ],
  entryComponents: [
    ProjectDialogComponent
  ],
  providers: [
    WorksService,
    SkillsService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
