import { Meteor } from 'meteor/meteor';

import { loadCsCourses } from './imports/fixtures/cscourses';
import { loadQueuedCourses } from './imports/fixtures/queuedcourses';
import { loadSemesterCourses } from './imports/fixtures/semestercourses';
/*
Starting up the universal database in the server
*/
Meteor.startup(() => {
  loadCsCourses();
  loadQueuedCourses();
  loadSemesterCourses();
});