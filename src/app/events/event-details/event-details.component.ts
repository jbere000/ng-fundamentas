import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  @Output() eventClick = new EventEmitter();

  event: IEvent;
  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    const param = +this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.event = this.eventService.getEvent(param);
    }

  }

  cancel() {
    this.router.navigate(['/events']);
  }
  delete() {
console.log('deleted');
  }
  createSession() {
    this.router.navigate(['events/session/new']);
  }
  editEvent() {
    this.eventClick.emit(this.event);

  }

}


