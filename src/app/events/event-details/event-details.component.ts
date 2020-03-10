import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent, ISession } from '../shared';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styles: [
    `
    .container { padding-left:20px; padding-right: 20px; }
    .event-image { height: 100px; }
    `
  ]
})
export class EventDetailsComponent implements OnInit {
  @Output() eventClick = new EventEmitter();

  creationMode = false;
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
    this.creationMode = true;
  }
  editEvent() {
    this.eventClick.emit(this.event);

  }
  saveSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => session.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.creationMode = false;
  }
  cancelNewSession() {
    this.creationMode = false;
  }

}


