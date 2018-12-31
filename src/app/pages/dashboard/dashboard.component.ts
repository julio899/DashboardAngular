import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
// import ApexCharts from 'apexcharts';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lineChart = [];
  constructor(public _servicio: ServicioService ) {
    // this.initDashboardPageCharts();
  }

  ngOnInit() {

    const ctx = document.getElementById('myChart');
    ctx.style.width = '100%';
    ctx.style.height = '200px';
    console.log(ctx);
    // Now we can create a new instance of our chart, using the Chart.js API
    // tslint:disable-next-line:no-unused-expression
    this.lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  initDashboardPageCharts() {
  }

}
