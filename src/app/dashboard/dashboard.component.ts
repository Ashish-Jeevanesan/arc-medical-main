import { Component, Input } from '@angular/core';
//import Chart from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  section="default";
  leftlink_select(value: string){
    this.section= value;
    console.log('section value is '+this.section);
  }
}
