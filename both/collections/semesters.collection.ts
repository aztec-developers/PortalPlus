import { MongoObservable } from 'meteor-rxjs';//Wraps Meteor Original API

import { Semester } from '../models/semester.model';//Imports interface

export const Semesters = new MongoObservable.Collection<Semester>('semesters');
