import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
//import { Grid } from 'dhx-grid';
import { Grid } from 'dhtmlx-suite/sources/dhtmlxGrid/codebase/dhtmlxgrid.js';
import 'dhx-suite/codebase/grid.css';

@Component({
  selector: 'app-grid',
  template: '<div #grid class="dhx-container--grid"></div>',
  styleUrls: ['./grid.component.css']
})
  export class GridComponent implements OnInit {
    @ViewChild('grid', { static: true }) gridContainer!: ElementRef;
    data!: [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '555-1234', address: '123 Main St.' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '555-5678', address: '456 Elm St.' },
      { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '555-9012', address: '789 Oak St.' }
    ];
  
  
    ngOnInit() {
      const grid = new Grid(this.gridContainer.nativeElement, {
        columns: [
          { header: 'ID', field: 'id', width: 50 },
          { header: 'Name', field: 'name', width: 150 },
          { header: 'Email', field: 'email', width: 200 },
          { header: 'Phone', field: 'phone', width: 100 },
        ],
        data: this.data,
      });
    }
}
  


