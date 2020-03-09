import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { ISession, EventService } from '../shared';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
    selector: 'app-create-session',
    templateUrl: './create-session.component.html',
    styles: [`
    em {float: right; color: #E0565C; padding-left: 10px;}
    .error {background-color: #E3C3C5}
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :-ms-input-placeholder {color: #999;}`]
})
export class CreateSessionComponent implements OnInit {
    @Output() saveNewSession = new EventEmitter();
    @Output() cancelNewSession = new EventEmitter();

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
         this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords(['foo', 'bar'])]);

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
        this.saveNewSession.emit(this.session);

    }
    cancel() {

        this.cancelNewSession.emit();
    }

    private restrictedWords(words) {
    return (control: FormControl): {[key: string]: any} => {
        if (!words) {
            return null; }
        const invalidWords = words.map(
            w => control.value.includes(w) ? w : null).filter(w => w != null);
        return invalidWords && invalidWords.length > 0 ? {restrictedWords: invalidWords.join(', ')} : null;
    };
}
}
