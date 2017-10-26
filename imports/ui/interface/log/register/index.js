import { Template } from 'meteor/templating';

import './style.css';
import './main.html';

Template.registerPage.events({
    'submit #RegistrationForm'(event){

        event.preventDefault();
    }
})
