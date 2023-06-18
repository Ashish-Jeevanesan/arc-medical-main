import { Component, Input } from '@angular/core';
import { Section } from '../app.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  section="";
  leftlink_select(value: string){
    this.section= value;
  }
}
