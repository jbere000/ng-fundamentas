import {Routes} from '@angular/router';
import { Page404Component } from './errors/page404/page404.component';
import {EventListResolver, EventRouteActivator, CreateEventComponent, EventDetailsComponent,
    EventsListComponent, CreateSessionComponent} from './events/index';
import { EditEventComponent } from './events/edit-event/edit-event.component';
export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    {path: 'events/edit/:id', component: EditEventComponent, canActivate: [EventRouteActivator]},
    {path: 'events/session/new', component: CreateSessionComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: '404', component: Page404Component},
    {path: 'user',  loadChildren: './user/user.module#UserModule'},
    {path: '', redirectTo: '/events', pathMatch: 'full'}
];
