import { Component } from '@angular/core';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Meteor } from 'meteor/meteor';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';

/*
  Import collections
*/
import { Courses } from '../../../../both/collections/courses.collection';
import { Semesters } from '../../../../both/collections/semesters.collection';
/*
  Import models
 */
import { Semester } from '../../../../both/models/semester.model';
import { Observable } from 'rxjs/Observable';

import template from './contentscreen.component.html';
import style from './contentscreen.component.scss';

@Component({
	selector: 'contentscreen',
	template,
	styles: [style]
})

@InjectUser('user')
export class ContentscreenComponent {
	user: Meteor.User;
  	semesters: Observable<Semester[]>;

  	/*
	    Assign Subscriptions.
	*/
	semestersSub: Subscription;

	constructor(
    	private route: ActivatedRoute
  	)	{
		this.semesters = Semesters.find({}).zone();
	    /*
	      Call subscribe on these subscriptions.
	    */
	    this.semestersSub = MeteorObservable.subscribe('semesters').subscribe();
  	}
}