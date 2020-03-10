import { Component, Input } from '@angular/core';
import { ISession } from '../shared';

@Component({
    selector: 'app-session-list',
    templateUrl: './session-list.component.html',
    styles: [`
    i { color: red }
    `]
})

export class SessionListComponent {
    @Input() sessions: ISession[];
}
