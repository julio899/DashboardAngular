import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  page:String;
  constructor() {
    this.page = 'dashboard';
    // this.page = 'login';
    console.log('servicio principal');
   }

   public changePage(new_page) {
    this.page = new_page;
   }
}
