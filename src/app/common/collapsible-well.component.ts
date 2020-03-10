import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'collapsible-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
    <h4>{{title}}
    </h4>
    <ng-content selector="[well-body]" *ngIf="visible"></ng-content>
    </div>
    `
})
export class CollapsibleWellComponent {
    @Input() title: string;
    visible = false;

    toggleContent() {
        this.visible = !this.visible;
    }
}
