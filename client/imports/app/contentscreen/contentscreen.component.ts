import { Component } from '@angular/core';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Meteor } from 'meteor/meteor';
import { OnInit } from '@angular/core';

import template from './contentscreen.component.html';
import style from './contentscreen.component.scss';

@Component({
  selector: 'contentscreen',
  template,
  styles: [style]
})
@InjectUser('user')
export class ContentscreenComponent implements OnInit {
  user: Meteor.User;

}
