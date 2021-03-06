import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule} from 'ngx-bootstrap/modal';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ColumnComponent } from './column/column.component';
import { DatatableComponent } from './datatable/datatable.component';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
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

  constructor (ngRedux: NgRedux<IAppState>, private devTools: DevToolsExtension) {
    let enhancers = [];
    // ... add whatever other enhancers you want.

    // You probably only want to expose this tool in devMode.
    if (devTools.isEnabled()) {
      enhancers = [ ...enhancers, devTools.enhancer() ];
    }

    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }
}
