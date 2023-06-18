import { Component, Input } from '@angular/core';
import { Section } from '../app.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  activeSection: Section = Section.Dashboard;

  changeSection(sectionname: Section): void {
    this.activeSection = sectionname;
  }
  @Input() activeSession: Section = Section.Dashboard;
}
