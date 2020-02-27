import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from './user.model';
import { AuthService } from './auth.service';
@Component({

    templateUrl: './login.component.html',
    styles: [

    ]
})

export class LoginComponent {

    username;
    password;

    constructor(private authService: AuthService, private router: Router) {

    }

    login(formValues) {
    this.authService.loginUser(formValues.username, formValues.password);
    this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}

