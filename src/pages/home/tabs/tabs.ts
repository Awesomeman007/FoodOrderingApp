import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

import { HomePage } from '../home';
import { OrderPage } from '../order';
import { TrackingPage } from '../tracking';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})

export class TabsPage {
  tab1Root: any = HomePage;
  tab2Root: any = OrderPage;
  tab3Root: any = TrackingPage;

  tab1Title = "Home";
  tab2Title = "My Order";
  tab3Title = "Tracking";
  constructor() { 

  }
  
}