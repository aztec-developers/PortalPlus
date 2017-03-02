import { Meteor } from 'meteor/meteor';

import { loadCourses } from './imports/fixtures/courses';
import { loadQueuedCourses } from './imports/fixtures/queuedcourses';
import { loadSemesterCourses } from './imports/fixtures/semestercourses';
/*
Starting up the universal database in the server
*/
Meteor.startup(() => {
  loadCourses();
  loadQueuedCourses();
  loadSemesterCourses();
});