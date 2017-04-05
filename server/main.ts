import { Meteor } from 'meteor/meteor';

import { ServerDBMethods } from './imports/DBMethods';
import { loadCourses } from './imports/fixtures/courses';
import { loadSemesterCourses } from './imports/fixtures/semestercourses';
import { loadSemesters } from './imports/fixtures/semesters';
import { loadACourses } from './imports/fixtures/acourses';
import { loadReqs } from './imports/fixtures/reqs';

/*
	Import all publications here. Go to where you use these db's. 
	ie. semesters.component.ts
*/
import './imports/publications/courses';
import './imports/publications/semestercourses';
import './imports/publications/reqs';
import './imports/publications/semesters';
import './imports/publications/acourses';
/*
Starting up the universal database in the server
*/
Meteor.startup(() => {
  	loadCourses();
  	loadSemesterCourses();
  	loadReqs();
  	loadSemesters();
  	loadACourses();
  	return Meteor.methods(ServerDBMethods);
});