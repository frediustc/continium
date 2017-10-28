import { Template } from 'meteor/templating';

import './style.css';
import './main.html';
import { userSchema } from '/imports/collections/access/user.db.js';

Template.registerPage.events({
    'submit #RegistrationForm'(event){
        const target = event.target;
        const reg = {
            fullname: target.fn.value,
            username: target.un.value,
            email: target.em.value,
            password: target.ps.value,
            confirm: target.cn.value
            //need to add accept condition
        };

        //check if the value are correct
        if(userSchema.validate(reg)){
            console.log(reg);
        }

        event.preventDefault();
    }
})
