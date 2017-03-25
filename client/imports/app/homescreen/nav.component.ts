import { Component } from '@angular/core';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Meteor } from 'meteor/meteor';
import { OnInit } from '@angular/core';

/*
Import styles
*/
import template from './nav.component.html';
import style from './nav.component.scss';

/*
Import styles
*/
@Component({
    selector: 'ournav',
    template,
    styles: [style]
})

@InjectUser('user')
export class NavComponent {
     user: Meteor.User;

    logout() {
      Meteor.logout();
    }
}
