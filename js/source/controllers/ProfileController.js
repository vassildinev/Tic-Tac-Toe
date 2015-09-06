import Handlebars from '../../lib/handlebars.js';

function getProfile() {
    var currentUser = Parse.User.current();
    var data = {
        username: currentUser.get('username'),
        total: currentUser.get('total'),
        wins: currentUser.get('wins'),
        draws: currentUser.get('draws'),
        losses: currentUser.get('losses')
    };

    var template = $('#profile-template').html();
    var compiledTemplate = Handlebars.compile(template);
    var profileData = compiledTemplate(data);

    return profileData;
}

export {getProfile}
