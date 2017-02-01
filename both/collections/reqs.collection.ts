import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import {Req} from '../models/req.model';

export const Reqs = new MongoObservable.Collection<Req>('reqs');
