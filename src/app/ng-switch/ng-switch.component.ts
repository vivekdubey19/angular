import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css'],
})
export class NgSwitchComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  selectedItem: any;

  selection(ctrl) {
    this.selectedItem = ctrl.value;
  }
}
