import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent, EventService } from '../shared';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styles: [`em {float: right; color: #E0565C; padding-left: 10px;}
  .error input {background-color: #E3C3C5}
  .error ::-webkit-input-placeholder {color: #999;}
  .error ::-moz-placeholder {color: #999;}
  .error :-moz-placeholder {color: #999;}
  .error :-ms-input-placeholder {color: #999;}`]
})
export class CreateEventComponent implements OnInit {
  isDirty = true;
  constructor(private router: Router, private eventService: EventService) { }

  newEvent: IEvent;
  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues) {
this.eventService.saveEvent(formValues);
this.isDirty = false;
this.router.navigate(['/events']);

  }


}
