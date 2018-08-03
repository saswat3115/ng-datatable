import { Component, OnInit } from '@angular/core';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  dataList: any[] = [];

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.stateService.dataList.subscribe(s => {
      this.dataList = s;
    });
  }
}
