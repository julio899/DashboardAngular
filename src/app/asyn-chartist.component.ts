import { Component } from '@angular/core';

// import { ChartType } from 'chartist';

import * as Chartist from 'chartist';

declare var require: any;

const data: any = require('data.json');

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'async-chart',
  template: `
    <h4>Async</h4>
    <x-chartist
      [data]="data"
      [type]="type">
    </x-chartist>
  `
})
export class AsyncChartComponent {
  public data: Promise<Chartist.IChartistData>;
  public type: Promise<any>;

  constructor() {
    // simulate slow API call
    this.data = new Promise(function(resolve: any): void {
      setTimeout(function(): void {
        resolve(data.Pie);
      }, 5000);
    });

    this.type = new Promise(function(resolve: any): void {
      setTimeout(function(): void {
        resolve('Pie');
      }, 5000);
    });
  }
}


