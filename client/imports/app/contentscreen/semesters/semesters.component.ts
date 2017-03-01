import { Component } from '@angular/core';
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
export class SemestersComponent {
  // courses: Observable<Course[]>;
  queuedcourses: Observable<Course[]>;
  semestercourses: Observable<Course[]>;

  constructor() {
    // this.courses = Courses.find({}).zone();
    this.semestercourses = SemesterCourses.find({}).zone();
    this.queuedcourses = QueuedCourses.find({}).zone();
  }


// function to remove the course from the courses
// database

  removeCourse(course: Course): void {
    SemesterCourses.remove(course._id);
  }

  /*
    addCourses() takes the QueuedCourses and Adds them to the SemesterCourses.
  */
  addCourses(): void {
    var coursesToAdd = QueuedCourses.find({}, {fields : {_id : 0}});
    coursesToAdd.forEach( function(course) {
      // console.log(myDoc);
      SemesterCourses.insert(course);
    });
  }
}
