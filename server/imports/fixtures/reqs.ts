import { Reqs } from '../../../both/collections/reqs.collection';
import { Req } from '../../../both/models/req.model';
/*
	Populating the database with the data following the interface
*/
export function loadReqs() {
    /*
    	Reqs collection will initiate a query to the user's requirements database which will hold
    	the name of each requirement & status of each, according to that user.
    */
    if (Reqs.find().cursor.count() === 0) {
	    const reqs: Req[] = [{
	    	name: 'Competency Requirements',
	    	status: 'complete'
	    }, 
	    {
	    	name: 'Graduation Writing Assessment Requirement',
	    	status: 'incomplete'
	    },
	    {
	    	name: 'American Institutions Requirement',
	    	status: 'incomplete'
	    },
	    {
	    	name: 'Unit, Residence & GPA Requirements',
	    	status: 'incomplete'
	    },
	    {
	    	name: 'Cultural Diversity',
	    	status: 'incomplete'
	    },
	    {
	    	name: 'IVA. Explorations - Natural Sciences',
	    	status: 'incomplete'
	    },
	    {
	    	name: 'IVB. Explorations - Social and Behavioral Sciences',
	    	status: 'incomplete'
	    },
	    {
	    	name: 'IVC. Explorations - Humanities',
	    	status: 'incomplete'
	    },
	    {
	    	name: 'Preparation for the Major',
	    	status: 'incomplete'
	    },
	    {
	    	name: 'Major Requirements',
	    	status: 'incomplete'
	    }

	    ];
	    reqs.forEach((req: Req) => Reqs.insert(req));
	}
}