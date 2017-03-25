import { QueuedCourses } from '../../../both/collections/queuedcourses.collection';
import { Course } from '../../../both/models/course.model';
/*
Populating the database with the data following the interface
*/
export function loadQueuedCourses() {
    QueuedCourses.find({});
}