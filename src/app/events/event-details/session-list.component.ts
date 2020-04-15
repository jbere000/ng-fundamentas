import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';
import { sequenceEqual } from 'rxjs/operators';

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
    @Input() sortBy: string;
    visibleSeessions: ISession[] = [];

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSeessions.sort(sortByNameAsc) : this.visibleSeessions.sort(sortByVotesDesc);
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


function sortByNameAsc(s1: ISession, s2: ISession) {
 if (s1.name > s2.name) { return 1; } else if (s1.name === s2.name) { return 0; } else { return -1; }
}
function sortByVotesDesc(s1: ISession, s2: ISession) {
 return s2.voters.length - s1.voters.length;
}
