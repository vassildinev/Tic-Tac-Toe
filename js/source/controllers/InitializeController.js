import {logOut} from './LogOutController.js';

function initialize() {
    if (Parse.User.current()) {
        $('#name').html(Parse.User.current().get('username'));
        $('#name-container').show();
        $('#log-in').hide();
        $('#log-out').show();
        $('#sign-up').hide();
    } else {
        $('#name-container').hide();
    }

    $('#log-out').on('click', function () {
        logOut();
    })
}

export {initialize}