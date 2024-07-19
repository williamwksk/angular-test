import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities: any[];
  selectedCity: any;

  constructor() {
    this.cities = [
      { label: 'New York', value: 'NY' },
      { label: 'Rome', value: 'RM' },
      { label: 'London', value: 'LDN' },
      { label: 'Istanbul', value: 'IST' },
      { label: 'Paris', value: 'PRS' }
    ];
  }
}

