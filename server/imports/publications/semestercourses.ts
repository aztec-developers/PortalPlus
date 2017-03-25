/*
	Publish content after creating this file. Then go to main.ts in server.
*/
import { SemesterCourses } from '../../../both/collections/semestercourses.collection';

/*
	This will do a public publish
	Meteor.publish('semestercourses', () => SemesterCourses.find());
*/
Meteor.publish('semestercourses', function() {
	if (!this.userId) {
		return null;
	}
	return SemesterCourses.find();
});