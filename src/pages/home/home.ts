import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { ServerProvider } from '../../providers/server/server'
import { Menu, Order, Tracking} from '../../models/server.models'
import { ConfirmPage } from '../home/confirm'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public menu$: Observable<Menu>;
  public order$: Observable<Order>;
  public tracking$: Observable<Tracking>;
  constructor(private serverProvider: ServerProvider, public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

  ngOnInit() {
    this.displayMenu()
    this.presentLoadingDefault()
  }

 

  async displayMenu() {
    this.menu$ = this.serverProvider.showMenu();
    await this.delay(1000)
  }

  sendOrder(menu) {
    this.serverProvider.pushOrder(menu);
  }

  onClickShowMenuDetail(menuNum, name, image, description, price) {
    console.log(image)
    this.navCtrl.push(ConfirmPage, {menuNum:menuNum, name:name, image:image, description:description, price:price});
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 500);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
