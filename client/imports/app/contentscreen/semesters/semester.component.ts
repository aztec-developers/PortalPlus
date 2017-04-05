import { Component, Input } from '@angular/core';
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
import { ACourses } from '../../../../../both/collections/acourses.collection';
/*
  Import models
*/
import { Semester } from '../../../../../both/models/semester.model';
import { Course } from '../../../../../both/models/course.model';
import { ACourse } from '../../../../../both/models/acourse.model';
import { Observable } from 'rxjs/Observable';
/*
  Import any other internal components here.
*/
import template from './semester.component.html';
import style from './semester.component.scss';

@Component({
  selector: 'semesters',
  template,
  styles: [style]
})

/*
  OnInit & OnDestroy may want to be implemented later.
*/
export class SemesterComponent {
  @Input() semester: Semester;
  courses: Observable<Course[]>;
  semestercourses: Observable<Course[]>;
  semesters: Observable<Semester[]>;
  acourses: Observable<ACourse[]>;
  /*
    Assign Subscriptions.
  */
  coursesSub: Subscription;
  semestercoursesSub: Subscription;
  semestersSub: Subscription;
  acoursesSub: Subscription;

  constructor(
    private route: ActivatedRoute
  ) {
    this.courses = Courses.find({}).zone();
    this.semestercourses = SemesterCourses.find({}).zone();
    this.semesters = Semesters.find({}).zone();
    this.acourses = ACourses.find({}).zone();
    var currentSemester = "";
    /*
      Call subscribe on these subscriptions.
    */
    this.coursesSub = MeteorObservable.subscribe('courses').subscribe();
    this.semestercoursesSub = MeteorObservable.subscribe('semestercourses').subscribe();
    this.semestersSub = MeteorObservable.subscribe('semesters').subscribe();
    this.acoursesSub = MeteorObservable.subscribe('acourses').subscribe();
  }

  setSemester(semester): string {
    currentSemester = semester;
    return currentSemester;
  }

  getSemester(): string {
    return currentSemester;
  }

  getUnits(courseID): string {
    return Courses.findOne({_id: courseID}).units;
  }

  getName(courseID): string {
    return Courses.findOne({_id: courseID}).name;
  }

  getClassNumber(courseID): string {
    return Courses.findOne({_id: courseID}).label;
  }

  getUserId(): string {
    return Meteor.userId();
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
  addCourses(course, semester): void {
    Meteor.call('addCourseToAssignedCourses', course, semester);
  }
}