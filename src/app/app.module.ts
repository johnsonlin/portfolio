import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppRoutesModule} from './app-routes.module';
import {AppComponent} from './app.component';
import {PortfolioNavComponent} from './components/nav/nav.component';
import {ProjectComponent} from './components/project/project.component';
import {HomepageComponent} from './pages/home/home.component';
import {WorkspageComponent} from './pages/works/works.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutesModule
  ],
  declarations: [
    AppComponent,
    PortfolioNavComponent,
    ProjectComponent,
    HomepageComponent,
    WorkspageComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
