import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { ServerProvider } from '../../providers/server/server'
import { Menu, Order, Tracking} from '../../models/server.models'


@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {

  public menu$: Observable<Menu>;
  public order$: Observable<Order>;
  public tracking$: Observable<Tracking>;
  public menu_list: Observable<Order>;
  public sort = 'oldest';
  constructor(private serverProvider: ServerProvider, public navCtrl: NavController, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {

  }

  ngOnInit() {
    
    
  }

  ionViewWillEnter() {
    this.showOrder()
    this.presentLoadingDefault()
    
  }

  async showOrder() {
    this.order$ = this.serverProvider.getOrder(this.sort);
    await this.delay(1000)
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

  onClickChangeSort() {
    if (this.sort == 'latest' ) {
      this.sort = 'oldest'
    } else if (this.sort == 'oldest') {
      this.sort = 'latest'
    }
    this.showOrder()
  }

  onClickClearOrder() {
    this.serverProvider.clearOrder()
    this.presentToast()
    this.delay(1000)
    this.showOrder()
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Your order has been cleared!',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
  

}
