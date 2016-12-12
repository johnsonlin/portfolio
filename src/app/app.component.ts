import {Component} from '@angular/core';

import {PortfolioNavComponent} from './components/nav/nav.component';

@Component({
  selector: 'portfolio-app',
  template: `
    <!--<h1>Johnson Lin</h1>-->
    <nav class="portfolio-nav"></nav>
    <router-outlet></router-outlet>
  `,
  viewProviders: [
    PortfolioNavComponent
  ]
})

export class AppComponent {

}