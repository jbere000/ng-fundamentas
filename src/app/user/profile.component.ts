import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { RouterLinkActive, Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [
    `
    em {float: right; color: #E0565C; padding-left: 10px;}
    .error input {background-color: #E3C3C5}
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :-ms-input-placeholder {color: #999;}
    `
  ]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit() {

    // tslint:disable-next-line: prefer-const
    this.firstName = new FormControl(this.auth.currentUser.firstName, Validators.required);
    // tslint:disable-next-line: prefer-const
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      // tslint:disable-next-line: object-literal-shorthand
      firstName: this.firstName,
      // tslint:disable-next-line: object-literal-shorthand
      lastName: this.lastName
    });

  }
  cancel() {
    this.router.navigate(['events']);
  }
  saveProfile(formValues) {
    if (this.profileForm.valid) {
    this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['events']);

  }
}
validateFirstName() {
  return this.firstName.valid || this.firstName.untouched;
}
validateLastName() {
  return this.lastName.valid || this.lastName.untouched;

 }
}

