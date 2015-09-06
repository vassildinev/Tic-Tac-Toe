function logIn(usernameTextFieldId, passwordTextFieldId) {
    if (Parse.User.current()) {
        Parse.User.logOut();
    }

    var username = $(usernameTextFieldId).val(),
        password = $(passwordTextFieldId).val();

    var currentUser = Parse.User.current();

    Parse.User.logIn(username, password, {
        success: function () {
            $('#log-in').hide();
            $('#log-out').show();
            $('#sign-up').hide();
            $('#name').html(username);
            $('#name-container').show();
        },

        error: function () {
            alert('Invalid username or password');
        }
    }).then(function () {
        var pendingGamesString = localStorage.getItem(Parse.User.current().get('username'));
        if (pendingGamesString) {
            var pendingGames = JSON.parse(pendingGamesString);
            Parse.User.current().save('games', pendingGames);
            localStorage.setItem(Parse.User.current().get('username'), '');
        }
    });
}

export {logIn}