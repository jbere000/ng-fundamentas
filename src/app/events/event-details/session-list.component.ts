import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';

@Component({
    selector: 'app-session-list',
    templateUrl: './session-list.component.html',
    styles: [`
    i { color: red }
    `]
})

export class SessionListComponent implements OnChanges {

    @Input() sessions: ISession[];
    @Input() filterBy: string;
    visibleSeessions: ISession[] = [];

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
        }
    }

    filterSessions(filter) {
        if (filter === 'all') {
this.visibleSeessions = this.sessions.slice(0);
    } else {
this.visibleSeessions = this.sessions.filter(session => {
    return session.level.toLowerCase() === filter; });
    }
    }

}


