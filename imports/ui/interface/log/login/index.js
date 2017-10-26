import { Template } from 'meteor/templating';

import './style.css';
import './main.html';

Template.loginPage.events({
    'submit #logInForm'(event){

        event.preventDefault();
    }
})
