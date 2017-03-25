/*
  Import collections
*/
import { Courses } from '../../both/collections/courses.collection';
import { QueuedCourses } from '../../both/collections/queuedcourses.collection';
import { SemesterCourses } from '../../both/collections/semestercourses.collection';
/*
  Import models
 */
import { Course } from '../../both/models/course.model';

export const ServerDBMethods =
{
	removeAllQueuedCourses: function() {
	    // return QueuedCourses.remove({});
	    QueuedCourses.remove({});
  },
  moveCourseToQueue: function(course: Course){
  	QueuedCourses.insert(course);
	},
	removeCourseFromQueue: function(course: Course){
		QueuedCourses.remove(course._id);
	},
	removeCourseFromSemester: function(course: Course) {
    SemesterCourses.remove(course._id);
  },
  addCourseToSemester: function() {
  	var coursesToAdd = QueuedCourses.find({}, {fields : {_id : 0}}).fetch();    
  	coursesToAdd.forEach( function(course) {
    		SemesterCourses.insert(course);
  	});
  	Meteor.call('removeAllQueuedCourses');
  }
}
