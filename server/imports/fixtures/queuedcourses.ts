import { QueuedCourses } from '../../../both/collections/queuedcourses.collection';
import { Course } from '../../../both/models/course.model';
/*
Populating the database with the data following the interface
*/
export function loadQueuedCourses() {
  if (QueuedCourses.find().cursor.count() === 0) {
    const queuedcourses: Course[] = [{
    units: '3',
    label: 'CS-320',
    name: 'Programming Languages',
    importance: 'Required',
    status: 'Taken'
    },
    {
    units: '3',
    label: 'CS-530',
    name: 'Systems Programing',
    importance: 'Required',
    status: ' Not Taken'
    }];

    queuedcourses.forEach((queuedcourse: Course) => QueuedCourses.insert(queuedcourse));
  }
}