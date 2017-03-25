/*
	Publish content after creating this file. Then go to main.ts in server.
*/
import { Semesters } from '../../../both/collections/semesters.collection';

/*
	This will do a public publish
	Meteor.publish('semestercourses', () => SemesterCourses.find());
*/
Meteor.publish('semesters', function() {
	if (!this.userId) {
		return null;
	}
	return Semesters.find();
});