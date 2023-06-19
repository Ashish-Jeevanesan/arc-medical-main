import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { LinearScale } from 'chart.js';

@Component({
  selector: 'app-chart',
  template: '<canvas #chartCanvas></canvas>'
})
export class ChartComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef;
  chart: Chart | undefined;

  ngOnInit() {
   // registerScale(LinearScale); // Register the linear scale
    Chart.register(...registerables); // Register the required components, including scales
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (this.chart) {
      this.chart.destroy(); // Destroy previous chart instance
    }
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        datasets: [{
          label: 'Customers',
          data: [10, 20, 30, 25, 15, 35],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        },
        {
          label: 'Monthly',
          data: [5, 12, 22, 10, 25, 55],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'green',
          borderWidth: 1
        }
      ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            type: 'linear', // Use the linear scale
            beginAtZero: true
          }
        }
      }
    });
  }

  ngAfterViewInit() {
    this.ngOnInit();
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
