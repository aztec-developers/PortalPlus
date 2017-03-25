/*
  Import collections
*/
import { Courses } from '../../both/collections/courses.collection';
import { SemesterCourses } from '../../both/collections/semestercourses.collection';
/*
  Import models
 */
import { Course } from '../../both/models/course.model';

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
  }
}