import { Component } from '@angular/core';
import { Courses } from '../../../../../both/collections/courses.collection';
import { Course } from '../../../../../both/models/course.model';
import { Observable } from 'rxjs/Observable';
/*
	Import any other internal components here.
*/

// component path
import template from './semesters.component.html';
import style from './semesters.component.scss';

@Component({
  selector: 'semesters',
  template,
  styles: [style]
})
export class SemestersComponent {
  courses: Observable<Course[]>;

  constructor() {
    this.courses = Courses.find({}).zone();
  }


// function to remove the course from the courses
// database

  removeCourse(course: Course): void {
   Courses.remove(course._id);
 }
}
