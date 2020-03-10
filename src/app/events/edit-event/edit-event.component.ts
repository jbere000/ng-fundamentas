import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IEvent, EventService } from '../shared';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {


  event: IEvent;
  param;
  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.param = +this.route.snapshot.paramMap.get('id');
    if (this.param) {
      const id = this.param;
      this.event = this.eventService.getEvent(this.param);
    }

  }
  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.router.navigate(['/events']);
  }
  cancel() {
    this.router.navigate(['/events', this.param]);
  }

}
