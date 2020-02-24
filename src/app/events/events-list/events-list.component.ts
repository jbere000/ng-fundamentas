import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  template: `<h1>Upcoming Angular Events!</h1>
  <hr/>
  <app-event-thumbnail #thumbnail [event]='event1' (eventClick)='handleEventClicked($event)'></app-event-thumbnail>
  <button class='btn btn-primary' (click)='onClick()'>{{thumbnail.someProperty}}</button>
  `,
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/1992',
    time: '10:00 am',
    price: 599.99,
    imageUrl: 'assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };

  constructor() { }

  ngOnInit(): void {
  }


  onClick() {

  }
  handleEventClicked(data) {
    console.log(data);

  }
}
