import {Component, OnInit, NgZone} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Accounts } from 'meteor/accounts-base';


/*
Import styles
*/
import template from './signup.component.html';
import style from './signup.component.scss';

/*
Import styles
*/
@Component({
    selector: 'signup',
    template,
    styles: [style]
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;
    error: string;

    constructor(private router: Router, private zone: NgZone, private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.error = 'uh oh';
    }

    signup() {
        if (this.signupForm.valid) {
            Accounts.createUser({
                username: this.signupForm.value.username,
                password: this.signupForm.value.password
            }, (err) => {
                if (err) {
                    this.zone.run(() => {
                        this.error = err;
                    });
                } else {
                    $('#signup').modal('toggle');
                    this.router.navigate(['/content']);
                }
            });
        }
    }
}
