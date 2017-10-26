import { Meteor } from 'meteor/meteor';

import '/imports/ui/interface/';

//Main Page
Router.route('/', function () {
  this.render('app');
});

//Load App
Router.route('/app', function () {

  if(!Meteor.user()){
      this.redirect('/login');
  }
  else {
      this.render('app');
  }

});

//log in page
Router.route('/login', function(){

    if(Meteor.user()){
        this.redirect('/app');
    }
    else {
        this.render('loginPage');
    }

});

//log in page
Router.route('/register', function(){

    if(Meteor.user()){
        this.redirect('/app');
    }
    else {
        this.render('registerPage');
    }

});
