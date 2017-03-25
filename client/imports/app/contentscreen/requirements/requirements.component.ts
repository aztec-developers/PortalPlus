import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';

import 'rxjs/add/operator/map';
/*
	Import collections
*/
import { Reqs } from '../../../../../both/collections/reqs.collection';
/*
	Import models
*/
import { Req } from '../../../../../both/models/req.model';
import { Observable } from 'rxjs/Observable';
/*
	Import any other internal components here.
*/
import template from './requirements.component.html';
import style from './requirements.component.scss';

/*
	Import styles
*/
@Component({
  selector: 'requirements',
  template,
  styles: [style]
})
export class RequirementsComponent {
  	reqs: Observable<Req[]>;

  	reqsSub: Subscription;

  	constructor(
  		private route: ActivatedRoute
  	)	{
    	this.reqs = Reqs.find({}).zone();
    	/*
	    	Call subscribe on these subscriptions.
	    */
	    this.reqsSub = MeteorObservable.subscribe('reqs').subscribe();
  	}
}
