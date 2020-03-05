import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { ISession, EventService } from '../shared';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
    templateUrl: './create-session.component.html',
    styles: [`em {float: right; color: #E0565C; padding-left: 10px;}
    .error input {background-color: #E3C3C5}
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :-ms-input-placeholder {color: #999;}`]
})
export class CreateSessionComponent implements OnInit {

    isDirty = true;
    session: ISession;
    constructor(private router: Router, private eventService: EventService) {
    }
    newSessionForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

     ngOnInit(): void {
         this.name = new FormControl('', Validators.required),
         this.presenter = new FormControl('', Validators.required),
         this.duration = new FormControl('', Validators.required),
         this.level = new FormControl('', Validators.required),
         this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)]);

         this.newSessionForm = new FormGroup ({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
         });
    }

    saveSession(formValues) {
        this.session = {
            id: undefined,
            name: formValues.name,
            duration: +formValues.duration,
            level: formValues.level,
            presenter: formValues.presenter,
            abstract: formValues.abstract,
            voters: []
        };

        console.log(this.session);

    }
    cancel() {
        this.router.navigate(['/events']);
      }
}
