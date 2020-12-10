import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { ServerProvider } from '../../providers/server/server';
import { Menu, Order, Tracking} from '../../models/server.models';



@Component({
  selector: 'page-order',
  templateUrl: 'tracking.html'
})
export class TrackingPage {

  public menu$: Observable<Menu>;
  public order$: Observable<Order>;
  public tracking$: Observable<Tracking>;
  public menu_list: Observable<Order>
  public doughnutChartLabels: string[] = ['Protein', 'Fats', 'Carb'];
  public doughnutChartData: number[];
  public doughnutChartType: string = 'doughnut';
  public doughnutColors:any[] = [{ backgroundColor: ["#900C3F", "#C70039", '#581845'] }];
  public chartClicked(e:any): void {
    console.log(e);
  }
  public chartHovered(e:any): void {
    console.log(e);
  }
  constructor(private serverProvider: ServerProvider, public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

  ngOnInit() {
    
    
  }

  ionViewWillEnter() {
    this.showTracking()
    this.presentLoadingDefault()
  }

  async showTracking() {
    this.tracking$ = this.serverProvider.getTracking();
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
}
