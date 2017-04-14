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
		//console.log(Semesters.find().sort({$natural:-1})):
	 	// var i = 0;
	 	// for(i = 0; i <= Semesters.find().cursor.count(); i++){
	 	// 	if(i == Semesters.find().cursor.count()){
	 	// 		document.getElementById("remove-function-button").style.visibility="visible";
	 	// 	}
	 	// }

	}

	  removeNewSemester(semester: Semester): void{
    Meteor.call('removeSemester',semester);
    this.position--;
    if(this.position%2 != 0 ){
      this.yearInc--;

    }
}
	 removeButton(semester: Semester): void{
	 	
	 	var i = 0;
	 	// for(i = 0; i <= Semesters.find().cursor.count(); i++){
	 	// 	if(i == Semesters.find().cursor.count()){
	 	// 		document.getElementById("remove-function-button").style.visibility="visible";
	 	// 	}
	 	// }
	 	// foreach(var semesters in Semesters){
	 	// 	if(semesters == Semesters[Semesters.find().cursor.count()]){
	 	// 		document.getElementById("function-button").style.visibility="visible";
	 	// 	}
	 	// }
	 }
	
}