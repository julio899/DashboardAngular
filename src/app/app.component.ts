import { ServicioService } from './services/servicio.service'; 
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  page: String;
  constructor(public _servicio: ServicioService ) {
    this.page = _servicio.page;
    console.log(_servicio.page);
  }
}
