function signUp(usernameTextFieldId, passwordTextFieldId) {
    var username = $(usernameTextFieldId).val(),
        password = $(passwordTextFieldId).val();

    if (username.length < 3) {
        alert('Username must be at least 3 symbols');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 symbols');
        return;
    }

    Parse.User.signUp(username, password, {
        total: 0,
        wins: 0,
        draws: 0,
        losses: 0
    }).then(function () {
        $('#name').html(username);
        $('#name-container').show();
        $('#log-in').hide();
        $('#log-out').show();
        $('#sign-up').hide();
    });
}

export {signUp}