import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from './actions';
import { IAppState } from './store';
import { IDataList } from '../model/datalist';

export interface IAppState {
  dataList: IDataList[];
}

export const INITIAL_STATE: IAppState = {
  dataList: JSON.parse(localStorage.getItem('stored-data')) || []
};

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case ADD_ITEM:
      action.dataList.Id = state.dataList.length + 1;
      state.dataList.push(Object.assign({}, action.dataList));
      localStorage.setItem('stored-data', JSON.stringify(state.dataList));
      break;
    case DELETE_ITEM:
      const index = state.dataList.findIndex(i => i.Id === action.Id);
      state.dataList.splice(index, 1);
      localStorage.setItem('stored-data', JSON.stringify(state.dataList));
      break;
    case UPDATE_ITEM:
      const itemIndex = state.dataList.findIndex(i => i.Id === action.dataList.Id);
      const item = state.dataList.find(i => i.Id === action.dataList.Id);
      state.dataList.splice(itemIndex, 1, item);
      localStorage.setItem('stored-data', JSON.stringify(state.dataList));
      break;
  }
  return state;
}
