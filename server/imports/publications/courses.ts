import { Meteor } from 'meteor/meteor';
import { Courses } from '../../../both/collections/courses.collection';

Meteor.publish('courses', function() {
  const selector = {
    $or: [{
      // course is public
      public: true
    },
    // or
    {
      // current user is the owner
      $and: [{
        owner: this.userId
      }, {
        owner: {
          $exists: true
        }
      }]
    }]
  };

  return Courses.find(selector);
});
