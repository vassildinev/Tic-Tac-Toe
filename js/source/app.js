import $ from '../lib/jquery.js';
import Sammy from '../lib/sammy.js';
import {initialize} from './controllers/InitializeController.js';
import {logIn} from './controllers/LogInController.js';
import {signUp} from './controllers/SignUpController.js';
import {startGame} from './controllers/GameController.js';
import {getProfile} from './controllers/ProfileController.js';

(function () {
    initialize();
    var app = Sammy('#content', function () {
        this.get('#/home', function (context) {
            this.load('templates/home-template.html', function (data) {
                context.$element().html(data);
            });
        });

        this.get('#/log-in', function (context) {
            this.load('templates/log-in-template.html', function (data) {
                context.$element().html(data);
                $('#log-in-btn').on('click', function () {
                    debugger;
                    logIn('#inputUsername', '#inputPassword');
                })
            });
        });

        this.get('#/sign-up', function (context) {
            this.load('templates/sign-up-template.html', function (data) {
                context.$element().html(data);
                $('#sign-up-btn').on('click', function () {
                    signUp('#inputUsername', '#inputPassword');
                })
            });
        });

        this.get('#/play', function (context) {
            this.load('templates/game-template.html', function (data) {
                var currentUser = Parse.User.current();
                if(!currentUser) {
                    context.$element().html($('<h3/>').html('You must be logged in to see this page'));
                } else {
                    context.$element().html(data);
                    startGame();
                }
            })
        });

        this.get('#/about', function (context) {
           this.load('templates/about-template.html', function (data) {
               context.$element().html(data);
           })
        });

        this.get('#/my-profile', function (context) {
            var profile = getProfile();
            context.$element().html(profile);
        })
    });

    app.run('#/home');
}());