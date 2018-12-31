import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  page:String;
  chartInit:Boolean;
  constructor() {
    this.page = 'dashboard';
    this.chartInit = false;
    // this.page = 'login';
    console.log('servicio principal');
   }

   public changePage(new_page) {
    this.page = new_page;
   }
}
