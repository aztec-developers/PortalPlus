import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';

import 'rxjs/add/operator/map';
/*
  Import collections
*/
import { Courses } from '../../../../../both/collections/courses.collection';
import { SemesterCourses } from '../../../../../both/collections/semestercourses.collection';
import { Semesters } from '../../../../../both/collections/semesters.collection';
/*
  Import models
*/
import { Semester } from '../../../../../both/models/semester.model';
import { Course } from '../../../../../both/models/course.model';
import { Observable } from 'rxjs/Observable';
/*
	Import any other internal components here.
*/
import template from './semesters.component.html';
import style from './semesters.component.scss';

@Component({
  selector: 'semesters',
  template,
  styles: [style]
})

/*
  OnInit & OnDestroy may want to be implemented later.
*/
export class SemestersComponent {
  courses: Observable<Course[]>;
  semestercourses: Observable<Course[]>;
  semesters: Observable<Semester[]>;
  /*
    Assign Subscriptions.
  */
  coursesSub: Subscription;
  semestercoursesSub: Subscription;
  semestersSub: Subscription;

  constructor(
    private route: ActivatedRoute
  ) {
    this.courses = Courses.find({}).zone();
    this.semestercourses = SemesterCourses.find({}).zone();
    this.semesters = Semesters.find({}).zone();
    /*
      Call subscribe on these subscriptions.
    */
    this.coursesSub = MeteorObservable.subscribe('courses').subscribe();
    this.semestercoursesSub = MeteorObservable.subscribe('semestercourses').subscribe();
    this.semestersSub = MeteorObservable.subscribe('semesters').subscribe();
  }

  /*
    ngOnInit() could be used here which happens after the constructor
    
    ngOnInit() {
      this.parties = Parties.find({}).zone();
      this.partiesSub = MeteorObservable.subscribe('parties').subscribe();
    }
   
    ngOnDestroy() {
      this.partiesSub.unsubscribe();
    }
  */

  /*
    removeCourse() takes the course in the Semester and removes it.
  */
  removeCourse(course: Course): void {
    Meteor.call('removeCourseFromSemester', course);
  }

  /*
    addCourses() takes the QueuedCourses and Adds them to the SemesterCourses.
  */
  addCourses(course): void {
    Meteor.call('addCourseToSemester', course);
  }
}
