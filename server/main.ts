import { Meteor } from 'meteor/meteor';

import { loadCourses } from './imports/fixtures/courses';
/*
Starting up the universal database in the server
*/
Meteor.startup(() => {
  loadCourses();
});