/*
	Publish content after creating this file. Then go to main.ts in server.
*/
import { Reqs } from '../../../both/collections/reqs.collection';

Meteor.publish('reqs', () => Reqs.find());
