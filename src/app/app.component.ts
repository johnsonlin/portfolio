import {Component} from '@angular/core';

import {PortfolioNavComponent} from './components/nav/nav.component';

@Component({
  selector: 'portfolio-app',
  templateUrl: './app.template.html',
  viewProviders: [
    PortfolioNavComponent
  ]
})

export class AppComponent {

}