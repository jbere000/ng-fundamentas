import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
  template: `<h1>Upcoming Angular Events!</h1>
  <hr/>
  <div class='row'>
    <div class='col-md-5'  *ngFor='let event of events'>
    <app-event-thumbnail [event]='event' (eventClick)='handleEventClicked($event)'></app-event-thumbnail>
    </div>
  </div>
  `,
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  onClick() {

  }
  handleEventClicked(data) {
    console.log(data);

  }

}
