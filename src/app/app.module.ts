import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule} from 'ngx-bootstrap/modal';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ColumnComponent } from './column/column.component';
import { DatatableComponent } from './datatable/datatable.component';


@NgModule({
  declarations: [
    AppComponent,
    ColumnComponent,
    DatatableComponent
  ],
  imports: [
  BrowserModule, FormsModule, ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
