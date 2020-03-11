import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Page404Component } from './errors/page404/page404.component';
import { UserModule } from './user/user.module';
import { AuthService } from './user/auth.service';
import { EventDetailsComponent, EventsListComponent,
  EventsAppComponent, EventThumbnailComponent,
  CreateEventComponent, EventRouteActivator, EventListResolver, EventService, CreateSessionComponent,
  SessionListComponent} from './events/index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { CollapsibleWellComponent} from './common/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsAppComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Page404Component,
    EditEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
    ],
  imports: [
    UserModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthService,
    EventService,
    EventRouteActivator,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    EventListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
 if (component.isDirty) {
  return window.confirm('You have not saved this event, do you really want to cancel?');
 }
 return true;

}
