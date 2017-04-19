/*
  Import collections
*/
import { Courses } from '../../both/collections/courses.collection';
import { SemesterCourses } from '../../both/collections/semestercourses.collection';
import { Semesters } from '../../both/collections/semesters.collection';
import { ACourses } from '../../both/collections/acourses.collection';
/*
  Import models
 */
import { Course } from '../../both/models/course.model';
import { Semester } from '../../both/models/semester.model';
import { ACourse } from '../../both/models/acourse.model';

export const ServerDBMethods =
{
  removeCourseFromSemester: function(course: Course, semester: Semester) {
    ACourses.remove({_id: course._id, semesterID: semester._id});
  },
  addCourseToAssignedCourses: function(course, semester) {
    ACourses.insert({semesterID: semester._id, courseID: course._id, userID: this.userId});
  },
  addSemester: function(semester: Semester, yearInc: number,season: string){
    Semesters.insert({name:season+ " " + yearInc});
  },
  removeSemester: function(semester: Semester){
    Semesters.remove(semester._id);

  }
}