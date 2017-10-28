import '../';

export const userSchema = new SimpleSchema({
    fullname: {
        type: String,
        label: 'Full Name',
        regEx: SimpleSchema.RegEx.Fullname,
        min: 5,
        max: 100
    },
    username: {
        type: String,
        label: 'User Name',
        regEx: SimpleSchema.RegEx.Username,
        min: 5,
        max: 32
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: 'Email'
    },
    password: {
        type: String,
        label: 'Password',
        min: 6,
        max: 32
    },
    confirm: {
        type: String,
        label: 'Confirm',
        min: 6,
        max: 32
    },
    //need to be implemented
    acceptCondition: {
        type: Boolean,
        optional: true,
        defaultValue: true
    },//must be in the database
    // emailValidated: {
    //     type: Boolean,
    //     optional: true,
    //     defaultValue: true
    // }
});
