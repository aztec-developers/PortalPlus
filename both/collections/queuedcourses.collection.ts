import { MongoObservable } from 'meteor-rxjs';//Wraps Meteor Original API

import { Course } from '../models/course.model';//Imports interface
/*
Uses MongoObservable static methods
Exporting the Course Object from this module to the output.
*/
export const QueuedCourses = new MongoObservable.Collection<Course>('queuedcourses');
