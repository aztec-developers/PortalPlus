import { Meteor } from 'meteor/meteor';
import { Courses } from '../../../both/collections/courses.collection';

Meteor.publish('courses', () => Courses.find());
