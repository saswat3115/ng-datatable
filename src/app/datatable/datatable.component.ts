import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { ColumnComponent } from '../column/column.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  public modalRef: BsModalRef;

  @Input() dataset: Array<any>;

  columns: ColumnComponent[] = [];
  selectedRowData = {};

  addColumns(column) {
    this.columns.push(column);
  }

  constructor(private modalService: BsModalService) {
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
  }

  delete(event) {
    const index =  this.dataset.findIndex(f => f.Id === event);
    this.dataset.splice(index, 1);
    sessionStorage.setItem('datalist', JSON.stringify(this.dataset));
  }


  editEmit(id, template: TemplateRef<any>) {
    this.selectedRowData = this.dataset.find(x => x.Id === id);
    this.modalRef = this.modalService.show(template);
  }

  submit() {
    const seleted = this.selectedRowData as any;
    if (!seleted.Id) {
      seleted.Id = this.dataset.length ? this.dataset.length + 1 : 1;
      this.dataset.push(seleted);
    } else {
      this.dataset.forEach(d => {
        if (d.Id === seleted.Id) {
            d.name = seleted.name;
            d.address = seleted.address;
            d.age = seleted.age;
            d.status = seleted.status;
        }
      });
    }

    sessionStorage.setItem('datalist', JSON.stringify(this.dataset));
    this.selectedRowData = {};
    this.modalRef.hide();
  }


}
