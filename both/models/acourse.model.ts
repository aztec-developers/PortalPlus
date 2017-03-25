//Exporting the interface used for the components of each database object.
import { CollectionObject } from './collection-object.model';

export interface ACourse extends CollectionObject {
  semesterID: string;
  courseID: string;
  userID: string;
}
