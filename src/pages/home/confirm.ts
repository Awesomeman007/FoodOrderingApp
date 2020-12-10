import { Component } from '@angular/core';
import { NavController, NavParams,ToastController, ModalController, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { ServerProvider } from '../../providers/server/server'
import { Menu, Order, Tracking} from '../../models/server.models'

@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html'
})
export class ConfirmPage {

  public menuNum: any;
  public name: any;
  public image: any;
  public description: any;
  public price: any;
  constructor(private serverProvider: ServerProvider, public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public modalCtrl: ModalController, public viewCtrl: ViewController) {
    this.menuNum = this.navParams.get('menuNum');
    this.name = this.navParams.get('name');
    this.image = this.navParams.get('image');
    this.description = this.navParams.get('description');
    this.price = this.navParams.get('price');
    
    
  }

  ngOnInit() {
    console.log(this.name)
  }


  async sendOrder(menu) {
    this.presentToast()
    await this.delay(1000)
    this.navCtrl.pop()
    return this.serverProvider.pushOrder(menu);
    
  }

  ionViewWillEnter() {
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.transform = 'translateY(56px)';
      });
    } // end if
  }

  ionViewDidLeave() {
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.transform = 'translateY(0)';
      });
    } // end if
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Your order has been placed!',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

}