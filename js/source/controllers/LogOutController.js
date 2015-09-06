function logOut() {
    debugger;
    if(Parse.User.current()) {
        Parse.User.logOut();
        $('#log-in').show();
        $('#log-out').hide();
        $('#sign-up').show();
        $('#name').html('');
        $('#name-container').hide();
    } else {
        alert('No user to log out');
    }
}

export {logOut}