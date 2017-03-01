import { Component } from '@angular/core';
/*
  Import collections
*/
import { CsCourses } from '../../../../../both/collections/cscourses.collection';
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

export class SemestersComponent {
  cscourses: Observable<Course[]>;
  queuedcourses: Observable<Course[]>;
  semestercourses: Observable<Course[]>;

  constructor() {
    this.cscourses = CsCourses.find({}).zone();
    this.semestercourses = SemesterCourses.find({}).zone();
    this.queuedcourses = QueuedCourses.find({}).zone();
  }

  /*
    removeCourse() takes the course in the Semester and removes it.
  */
  removeCourse(course: Course): void {
    SemesterCourses.remove(course._id);
  }

  /*
    queueMoveBack() takes the course in Queue and moves it back 
    into CsCourses (deletes from QueuedCourses)
  */
  queueMoveBack(course: Course): void {
    QueuedCourses.remove(course._id);
  }

  /*
    moveToQueue() takes the course from CsCourses and moves it into
    QueuedCourses.
  */
  moveToQueue(course: Course): void {
    QueuedCourses.insert(course);
  }

  /*
    addCourses() takes the QueuedCourses and Adds them to the SemesterCourses.
  */
  addCourses(): void {
    var coursesToAdd = QueuedCourses.find({}, {fields : {_id : 0}}).fetch();
    
    coursesToAdd.forEach( function(course) {
      // console.log(myDoc);
      SemesterCourses.insert(course);
    });
  }
}
