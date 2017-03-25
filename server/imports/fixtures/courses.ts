import { Courses } from '../../../both/collections/courses.collection';
import { Course } from '../../../both/models/course.model';
/*
Populating the database with the data following the interface
*/

/*
  Was previously used for loading the courses into the semester,
  but that has now switched to SemesterCourses. 

  This file may be used for something else, like getting the courses
  from Mlabs db.
*/
export function loadCourses() {
  Courses.find({});
}