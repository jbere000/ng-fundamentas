import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styles: [
    `
    .container { padding-left:20px; padding-right: 20px; }
    .event-image: { height: 100px; }
    `
  ]
})
export class EventDetailsComponent implements OnInit {

  event: IEvent;
  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const param = +this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.event = this.eventService.getEvent(param);
    }

  }

}


