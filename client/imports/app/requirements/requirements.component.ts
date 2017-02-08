import { Component } from '@angular/core';
import {Reqs} from '../../../../both/collections/reqs.collection';
import {Req} from '../../../../both/models/req.model';
import {Observable} from 'rxjs/Observable';
/*
	Import styles
*/
import template from './requirements.component.html';
import style from './requirements.component.scss';

/*
	Import styles
*/
@Component({
  selector: 'requirements',
  template
})
export class RequirementsComponent {
  reqs: Observable<Req[]>;

  constructor() {
    this.reqs = Reqs.find({}).zone();
  }
}
