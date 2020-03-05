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
  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    const param = +this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.event = this.eventService.getEvent(param);
    }

  }
  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.router.navigate(['/events']);
  }
  cancel() {
    this.router.navigate(['/events']);
  }

}
