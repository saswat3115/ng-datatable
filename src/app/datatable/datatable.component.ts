import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { ColumnComponent } from '../column/column.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { StateService } from './../services/state.service';
import { IDataList } from './../model/datalist';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  public modalRef: BsModalRef;

  @Input() dataset: IDataList[];

  columns: ColumnComponent[] = [];
  selectedRowData: IDataList = {Id: null, Name: '', Address: '', Age: '', Status: ''};

  addColumns(column) {
    this.columns.push(column);
  }

  constructor(private modalService: BsModalService, private stateService: StateService) {
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
  }

  delete(event) {
    this.stateService.delete(event);
  }


  editEmit(id, template: TemplateRef<any>) {
    this.selectedRowData = this.dataset.find(x => x.Id === id);
    this.modalRef = this.modalService.show(template);
  }

  submit() {
    const seleted = this.selectedRowData as any;
    seleted.Id ? this.stateService.update(seleted) : this.stateService.add(seleted);
    this.selectedRowData =  {Id: null, Name: '', Address: '', Age: '', Status: ''};
    this.modalRef.hide();
  }


}
