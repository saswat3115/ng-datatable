import { Component, OnInit, Input } from '@angular/core';
import { DatatableComponent } from '../datatable/datatable.component';


@Component({
  selector: 'app-column',
  template: ''
  // styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input() value;
  @Input() header;

  constructor(table: DatatableComponent) {
     table.addColumns(this);
   }

  ngOnInit() {
  }

}
