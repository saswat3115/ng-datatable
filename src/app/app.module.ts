import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule} from 'ngx-bootstrap/modal';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ColumnComponent } from './column/column.component';
import { DatatableComponent } from './datatable/datatable.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './redux/store';
import { StateService } from './services/state.service';


@NgModule({
  declarations: [
    AppComponent,
    ColumnComponent,
    DatatableComponent
  ],
  imports: [
  BrowserModule, FormsModule, ModalModule.forRoot(), NgReduxModule
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor (ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
