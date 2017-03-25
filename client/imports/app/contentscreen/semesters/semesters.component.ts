import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';

import 'rxjs/add/operator/map';
/*
  Import collections
*/
import { Courses } from '../../../../../both/collections/courses.collection';
import { QueuedCourses } from '../../../../../both/collections/queuedcourses.collection';
import { SemesterCourses } from '../../../../../both/collections/semestercourses.collection';
/*
  Import models
 */
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
  queuedcourses: Observable<Course[]>;
  semestercourses: Observable<Course[]>;
  /*
    Assign Subscriptions.
  */
  coursesSub: Subscription;
  queuedcoursesSub: Subscription;
  semestercoursesSub: Subscription;

  constructor(
    private route: ActivatedRoute
  ) {
    this.courses = Courses.find({}).zone();
    this.semestercourses = SemesterCourses.find({}).zone();
    this.queuedcourses = QueuedCourses.find({}).zone();
    /*
      Call subscribe on these subscriptions.
    */
    this.coursesSub = MeteorObservable.subscribe('courses').subscribe();
    this.semestercoursesSub = MeteorObservable.subscribe('semestercourses').subscribe();
    this.queuedcoursesSub = MeteorObservable.subscribe('queuedcourses').subscribe();
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
    queueMoveBack() takes the course in Queue and moves it back
    into Courses (deletes from QueuedCourses)
  */
  queueMoveBack(course: Course): void {
    Meteor.call('removeCourseFromQueue', course);
  }

  /*
    moveToQueue() takes the course from Courses and moves it into
    QueuedCourses.
  */
  moveToQueue(course: Course): void {
    Meteor.call('moveCourseToQueue', course);
  }

  /*
    addCourses() takes the QueuedCourses and Adds them to the SemesterCourses.
  */
  addCourses(): void {
    Meteor.call('addCourseToSemester');
  }
}
