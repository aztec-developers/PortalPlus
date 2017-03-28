/*
Import collections
*/
import { Courses } from '../../both/collections/courses.collection';
import { SemesterCourses } from '../../both/collections/semestercourses.collection';
import { Semesters } from '../../both/collections/semesters.collection';
/*
Import models
*/
import { Course } from '../../both/models/course.model';
import { Semester } from '../../both/models/semester.model';

export const ServerDBMethods =
{

  // removeAllQueuedCourses: function() {
  //     QueuedCourses.remove({});
  //  },
  removeCourseFromSemester: function(course: Course) {
    SemesterCourses.remove(course._id);
  },
  addCourseToSemester: function(course: Course) {
    // var coursesToAdd = QueuedCourses.find({}, {fields : {_id : 0}}).fetch();
    // coursesToAdd.forEach( function(course) {
    //      SemesterCourses.insert(course);
    // });
    // Meteor.call('removeAllQueuedCourses');
    SemesterCourses.insert(course);
  },
  addSemester: function(semester: Semester, yearInc: number,season: string){
    Semesters.insert({name:season,year:yearInc});
  },
  removeSemester: function(semester: Semester){
    Semesters.remove(semester._id);

  }
}