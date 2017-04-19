import { Component,Input,OnInit } from '@angular/core';
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
export class ContentscreenComponent  {
	user: Meteor.User;
  	semesters: Observable<Semester[]>;

  	 yearInc: number = 2018;
	 position: number = 0;
	season: string;
	idCount: number = 0;
  	/*
	    Assign Subscriptions.
	*/
	semestersSub: Subscription;
	// ngOnInit(){
	// 	document.getElementById("remove-function-button").style.visibility="visible";
	// }
	constructor(
    	private route: ActivatedRoute
  	)	{
		this.semesters = Semesters.find({}).zone();
	    /*
	      Call subscribe on these subscriptions.
	    */
	    this.semestersSub = MeteorObservable.subscribe('semesters').subscribe();
  	}
	//Algorithm for properly incrementing years and seasons when adding semesters. 
  	addNewSemester(semester: Semester): void{
		if(this.position%2== 0){
			this.season = "Fall";
			Meteor.call('addSemester', semester,this.yearInc,this.season);
			this.position++;
			//console.log(this.yearInc + "\n" + this.season + "\n" + this.position);
		}
		else{
			this.season = "Spring";
			Meteor.call('addSemester', semester,this.yearInc++,this.season);
			this.position++;

		} 
		

	}
	//Properly decrementing years and seasons when deleting a semester. 
	  removeNewSemester(semester: Semester): void{
    Meteor.call('removeSemester',semester);
    this.position--;
    if(this.position%2 != 0 ){
      this.yearInc--;

    }
}
	
}
