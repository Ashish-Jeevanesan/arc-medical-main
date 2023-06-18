import { Component } from '@angular/core';
export enum Section {
  Dashboard = 'dashboard',
  Settings = 'settings',
  Calendar = 'calendar'
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Customer Rep Dashboard';
  isLoggedIn = false;
  
  activeSection: Section = Section.Dashboard;

  changeSection(section: Section): void {
    this.activeSection = section;
  }
}
