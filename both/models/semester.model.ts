//Exporting the interface used for the components of each database object.
import { CollectionObject } from './collection-object.model';
//Changed Model from 1 field to 2 fields.
export interface Semester extends CollectionObject {
  name: string;
  year: number;
}