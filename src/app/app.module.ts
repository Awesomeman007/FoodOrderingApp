import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ServerProvider } from '../providers/server/server';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmPage } from '../pages/home/confirm';
import { OrderPage } from '../pages/home/order';
import { TrackingPage } from '../pages/home/tracking'
import { TabsPage } from '../pages/home/tabs/tabs'
import { ChartsModule } from 'ng2-charts-x';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConfirmPage,
    OrderPage,
    TrackingPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ConfirmPage,
    OrderPage,
    TrackingPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServerProvider,
  ]
})
export class AppModule {}
