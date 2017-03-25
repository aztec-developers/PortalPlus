import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Courses } from '../../../both/collections/courses.collection';
import { Course } from '../../../both/models/course.model'; //Import interface
import {InjectUser} from "angular2-meteor-accounts-ui";
/*
	Import styles
*/
import template from './app.component.html';
import style from './app.component.scss';

/*
	Import styles
*/
@Component({
  selector: 'app',
  template,
  styles: [style]
})
/*
export App Component Class with an array of course objects.
constructor with zone() connects the changes in the collection into view.
*/
@InjectUser('user')
export class AppComponent {
  constructor() {

  }

  logout() {
    Meteor.logout();
  }
}
