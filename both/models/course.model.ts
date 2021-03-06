//Exporting the interface used for the components of each database object.
import { CollectionObject } from './collection-object.model';

export interface Course extends CollectionObject {
  units: string;
  label: string;
  name: string;
  importance: string;
  status: string;
}
