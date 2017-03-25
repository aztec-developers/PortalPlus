/*
	Publish content after creating this file. Then go to main.ts in server.
*/
import { QueuedCourses } from '../../../both/collections/queuedcourses.collection';

Meteor.publish('queuedcourses', () => QueuedCourses.find());