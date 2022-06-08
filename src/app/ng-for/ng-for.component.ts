import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent implements OnInit {
  items: any[] = [
    {
      name: 'Tv',
      price: '1000 USD',
      quantity: 2,
    },
    {
      name: 'Fridge',
      price: '2000 USD',
      quantity: 2,
    },
    {
      name: 'Mobile',
      price: '1000 USD',
      quantity: 2,
    },
    {
      name: 'Washing Machine',
      price: '1500 USD',
      quantity: 2,
    },
    {
      name: 'Table',
      price: '50 USD',
      quantity: 2,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
