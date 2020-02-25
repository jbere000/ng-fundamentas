import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-event-thumbnail',
  template: `<div [routerLink]="['/events', event?.id]" class="well hoverwell thumbnail" (click)="handleClickMe()">
  <h2>{{event?.name}}</h2>
  <div>Date: {{event?.date}}</div>
  <div [ngClass]="getStartTimeClass()" [ngSwitch]='event?.time'>
    Time: {{event?.time}}
    <span  *ngSwitchCase="'8:00 am'">(Early Start)</span>
    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
    <span *ngSwitchDefault>(Normal Start)</span>
  </div>
  <div>Price: \${{event?.price}}</div>
<div *ngIf="event?.location">
  <span>Location: {{event?.location.address}}</span>
  <span>&nbsp;</span>
  <span>{{event?.location.city}}, {{event?.location?.country}}</span>
</div>
</div>`,
  styles: [`
  .bold { font-weight: bold; }
  .green { color: #003300 !important;}
  .thumbnail { min-height:210px; }
  .pad-left { margin-left: 10px; }
  .well div { color: #bbb; }
  `
  ]
})
export class EventThumbnailComponent implements OnInit {
@Input() event: any;
@Output() eventClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClickMe() {
  this.eventClick.emit(this.event);
  }
  getStartTimeClass() {
    if (this.event.time === '8:00 am') {
    return 'green bold'; }
    return '';
  }


}
