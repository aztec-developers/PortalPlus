import { Component } from '@angular/core';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Meteor } from 'meteor/meteor';
import { OnInit } from '@angular/core';
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
<<<<<<< Updated upstream
  	semesters: Observable<Semester[]>;
		yearInc: number = 2017;
		position: number = 0;
		season: string;
		idCount: number = 0;

  	/*
	    Assign Subscriptions.
=======
	semesters: Observable<Semester[]>;
	yearInc: number = 2017;
	position: number = 0;
	season: string;
	idCount: number = 0;
	
	/*
	Assign Subscriptions.
>>>>>>> Stashed changes
	*/
	semestersSub: Subscription;
	
	constructor(
		private route: ActivatedRoute
	)	{
		this.semesters = Semesters.find({}).zone();
<<<<<<< Updated upstream
	    /*
	      Call subscribe on these subscriptions.
	    */
	    this.semestersSub = MeteorObservable.subscribe('semesters').subscribe();

  	}
  	//Adding semester and components 
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
    	//Removing semester and components
		removeNewSemester(semester: Semester): void{
			Meteor.call('removeSemester',semester);
			this.position--;
			if(this.position%2 != 0 ){
				this.yearInc--;

			}
			
		}

		

=======
		/*
		Call subscribe on these subscriptions.
		*/
		this.semestersSub = MeteorObservable.subscribe('semesters').subscribe();
		
	}
	//Properly Incrementing years and seasons while also calling the DBMethod of add Semester.
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
	//Properly Decrementing years and seasons while also calling the DBMethod of remove Semester.
	removeNewSemester(semester: Semester): void{
		Meteor.call('removeSemester',semester);
		this.position--;
		if(this.position%2 != 0 ){
			this.yearInc--;
			
		}
		
	}
	
	
	
>>>>>>> Stashed changes
}