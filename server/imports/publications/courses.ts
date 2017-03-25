/*
	Publish content after creating this file. Then go to main.ts in server.
*/
import { Courses } from '../../../both/collections/courses.collection';

Meteor.publish('courses', () => Courses.find());
