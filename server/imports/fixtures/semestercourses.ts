import { SemesterCourses } from '../../../both/collections/semestercourses.collection';
import { Course } from '../../../both/models/course.model';
/*
Populating the database with the data following the interface
*/
export function loadSemesterCourses() {
  SemesterCourses.find({});
}