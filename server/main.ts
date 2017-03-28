import { Meteor } from 'meteor/meteor';

import { ServerDBMethods } from './imports/DBMethods';
import { loadCourses } from './imports/fixtures/courses';
import { loadQueuedCourses } from './imports/fixtures/queuedcourses';
import { loadSemesterCourses } from './imports/fixtures/semestercourses';
import { loadReqs } from './imports/fixtures/reqs';
/*
Starting up the universal database in the server
*/
Meteor.startup(() => {
  	loadCourses();
  	loadQueuedCourses();
  	loadSemesterCourses();
  	loadReqs();
  	return Meteor.methods(ServerDBMethods);
});