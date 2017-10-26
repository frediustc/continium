import { Meteor } from 'meteor/meteor';

import '/imports/ui/interface/';

//Main Page
Router.route('/', function () {
  this.render('app');
});

//Load App
Router.route('/app', function () {
  this.render('app');
  console.log(Meteor.user());
});
