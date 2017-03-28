//Exporting the interface used for the components of each database object.
import { CollectionObject } from './collection-object.model';

export interface Semester extends CollectionObject {
  name: string;
  year: number;
}