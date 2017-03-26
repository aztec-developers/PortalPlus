import { MongoObservable } from 'meteor-rxjs';//Wraps Meteor Original API

import { ACourse } from '../models/acourse.model';//Imports interface
/*
Uses MongoObservable static methods
Exporting the Course Object from this module to the output.
*/
export const ACourses = new MongoObservable.Collection<ACourse>('acourses');
