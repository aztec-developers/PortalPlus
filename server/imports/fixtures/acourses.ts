import { ACourses } from '../../../both/collections/acourses.collection';
import { ACourse } from '../../../both/models/acourse.model';
/*
Populating the database with the data following the interface
*/
export function loadACourses() {
  ACourses.find({});
}