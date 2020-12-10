import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu, Tracking, Order } from '../../models/server.models'

/*
  Generated class for the ServerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServerProvider {
  private flaskURL = 'http://fd627cc1e1c3.ngrok.io/'
  constructor(public http: HttpClient) {
    console.log('Hello ServerProvider Provider');
  }

  showMenu() {
    return this.http.get<Menu>(this.flaskURL+'show_menu')
  }

  pushOrder(menu) {
    console.log('from push_order: ' + menu)
    return this.http.get<Order>(this.flaskURL+'push_order?menu='+menu).subscribe()
  }

  getOrder(sort) {
    return this.http.get<Order>(this.flaskURL+'get_order?sort='+sort)
  }

  getTracking() {
    return this.http.get<Tracking>(this.flaskURL+'sum')
  }

  clearOrder() {
    return this.http.get<Order>(this.flaskURL+'clear_order').subscribe()
  }

}
