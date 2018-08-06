import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../redux/store';
import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from './../redux/actions';
import { Observable } from '../../../node_modules/rxjs';
import { IDataList } from './../model/datalist';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  dataList: Observable<IAppState[]>;

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.dataList = this.ngRedux
      .select<IAppState[]>('dataList');
  }

  add(item: IDataList) {
    this.ngRedux.dispatch({type: ADD_ITEM, dataList: item});
  }

  delete(id: any) {
    this.ngRedux.dispatch({type: DELETE_ITEM, id: id});
  }

  update(item: IDataList) {
    this.ngRedux.dispatch({type: UPDATE_ITEM, dataList: item});
  }
}
