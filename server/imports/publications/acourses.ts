/*
	Publish content after creating this file. Then go to main.ts in server.
*/
import { ACourses } from '../../../both/collections/acourses.collection';

/*
	This will do a public publish
	Meteor.publish('semestercourses', () => SemesterCourses.find());
*/
Meteor.publish('acourses', function() {
	if (!this.userId) {
		return null;
	}
	return ACourses.find();
});
