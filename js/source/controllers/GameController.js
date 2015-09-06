(function ($) {
    $.fn.disableSelection = function () {
        return this
            .attr('unselectable', 'on')
            .css('user-select', 'none')
            .on('selectstart', false);
    };
})(jQuery);

function getAttackableCellId(cells) {
    var cellId = -1;
    var t_cellId = -1;

    // make a winning move
    if (cells[0] === 0 && cells[1] === 0) {
        t_cellId = 2;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[3] === 0 && cells[4] === 0) {
        t_cellId = 5;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[6] === 0 && cells[7] === 0) {
        t_cellId = 8;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[0] === 0 && cells[3] === 0) {
        t_cellId = 6;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[1] === 0 && cells[4] === 0) {
        t_cellId = 7;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[2] === 0 && cells[5] === 0) {
        t_cellId = 8;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[0] === 0 && cells[4] === 0) {
        t_cellId = 8;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[2] === 0 && cells[4] === 0) {
        t_cellId = 6;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[0] === 0 && cells[2] === 0) {
        t_cellId = 1;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[3] === 0 && cells[5] === 0) {
        t_cellId = 4;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[6] === 0 && cells[8] === 0) {
        t_cellId = 7;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[0] === 0 && cells[6] === 0) {
        t_cellId = 3;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[1] === 0 && cells[7] === 0) {
        t_cellId = 4;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[2] === 0 && cells[8] === 0) {
        t_cellId = 5;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[0] === 0 && cells[8] === 0) {
        t_cellId = 4;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[2] === 0 && cells[6] === 0) {
        t_cellId = 4;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[1] === 0 && cells[2] === 0) {
        t_cellId = 0;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[4] === 0 && cells[5] === 0) {
        t_cellId = 3;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[7] === 0 && cells[8] === 0) {
        t_cellId = 6;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[3] === 0 && cells[6] === 0) {
        t_cellId = 0;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[4] === 0 && cells[7] === 0) {
        t_cellId = 1;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[5] === 0 && cells[8] === 0) {
        t_cellId = 2;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[4] === 0 && cells[8] === 0) {
        t_cellId = 0;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[4] === 0 && cells[6] === 0) {
        t_cellId = 2;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }


    // prevent a winning move


    if (cells[0] === 1 && cells[1] === 1) {
        t_cellId = 2;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[3] === 1 && cells[4] === 1) {
        t_cellId = 5;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[6] === 1 && cells[7] === 1) {
        t_cellId = 8;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[0] === 1 && cells[3] === 1) {
        t_cellId = 6;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[1] === 1 && cells[4] === 1) {
        t_cellId = 7;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[2] === 1 && cells[5] === 1) {
        t_cellId = 8;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[0] === 1 && cells[4] === 1) {
        t_cellId = 8;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[2] === 1 && cells[4] === 1) {
        t_cellId = 6;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[0] === 1 && cells[2] === 1) {
        t_cellId = 1;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[3] === 1 && cells[5] === 1) {
        t_cellId = 4;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[6] === 1 && cells[8] === 1) {
        t_cellId = 7;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[0] === 1 && cells[6] === 1) {
        t_cellId = 3;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[1] === 1 && cells[7] === 1) {
        t_cellId = 4;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[2] === 1 && cells[8] === 1) {
        t_cellId = 5;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[0] === 1 && cells[8] === 1) {
        t_cellId = 4;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[2] === 1 && cells[6] === 1) {
        t_cellId = 4;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[1] === 1 && cells[2] === 1) {
        t_cellId = 0;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[4] === 1 && cells[5] === 1) {
        t_cellId = 3;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[7] === 1 && cells[8] === 1) {
        t_cellId = 6;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[3] === 1 && cells[6] === 1) {
        t_cellId = 0;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[4] === 1 && cells[7] === 1) {
        t_cellId = 1;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[5] === 1 && cells[8] === 1) {
        t_cellId = 2;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[4] === 1 && cells[8] === 1) {
        t_cellId = 0;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[4] === 1 && cells[6] === 1) {
        t_cellId = 2;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    // making a fork, i.e two shots of winning


    if (cells[0] === 0 && cells[2] === 0) {
        t_cellId = 6;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[0] === 0 && cells[6] === 0) {
        t_cellId = 2;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[2] === 0 && cells[0] === 0) {
        t_cellId = 8;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[2] === 0 && cells[8] === 0) {
        t_cellId = 0;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[8] === 0 && cells[2] === 0) {
        t_cellId = 6;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[8] === 0 && cells[6] === 0) {
        t_cellId = 2;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[6] === 0 && cells[8] === 0) {
        t_cellId = 0;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[6] === 0 && cells[0] === 0) {
        t_cellId = 8;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    // preventing making a fork


    if (cells[0] === 1 && cells[2] === 1) {
        t_cellId = 6;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[0] === 1 && cells[6] === 1) {
        t_cellId = 2;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[2] === 1 && cells[0] === 1) {
        t_cellId = 8;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[2] === 1 && cells[8] === 1) {
        t_cellId = 0;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[8] === 1 && cells[2] === 1) {
        t_cellId = 6;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[8] === 1 && cells[6] === 1) {
        t_cellId = 2;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[6] === 1 && cells[8] === 1) {
        t_cellId = 0;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[6] === 1 && cells[0] === 1) {
        t_cellId = 8;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    // occupy center if available


    if (cells[4] === -1) {
        t_cellId = 4;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    // occupy opposite corner


    if (cells[0] === 1) {
        t_cellId = 8;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[8] === 1) {
        t_cellId = 0;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[2] === 1) {
        t_cellId = 6;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[6] === 1) {
        t_cellId = 2;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    // play in an empty side


    if (cells[1] === -1) {
        t_cellId = 1;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[3] === -1) {
        t_cellId = 3;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[5] === -1) {
        t_cellId = 5;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[7] === -1) {
        t_cellId = 7;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }


    // play in a corner square


    if (cells[0] === -1) {
        t_cellId = 0;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[2] === -1) {
        t_cellId = 2;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[6] === -1) {
        t_cellId = 6;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }

    if (cells[8] === -1) {
        t_cellId = 8;
        if (cells[t_cellId] === -1) {
            cellId = t_cellId;
            return cellId;
        }
    }
}

function makeAdvancedMove(cells) {
    var availableCellsCount = cells
        .filter(function (cellContent) {
            return cellContent === -1;
        })
        .length;

    if (availableCellsCount === 0) {
        return;
    }

    var cellId = getAttackableCellId(cells);

    if (cellId === -1) {
        alert('Engine not working');
    }

    cells[cellId] = 0;
    $('#' + (cellId + 1)).css('background', 'rgba(255, 0, 0, 0.5)').text('X');
}

function makeMove(cells) {
    var cellId = Math.floor(Math.random() * 9);
    var availableCellsCount = cells
        .filter(function (cellContent) {
            return cellContent === -1;
        })
        .length;

    if (availableCellsCount === 0) {
        return;
    }

    while (cells[cellId] === 1 || cells[cellId] === 0) {
        cellId = Math.floor(Math.random() * 9);
    }

    cells[cellId] = 0;
    $('#' + (cellId + 1)).css('background', 'rgba(255, 0, 0, 0.5)').text('X');
}

function evaluateGameState(cells) {
    var currentUser = Parse.User.current();

    // player wins
    if ((cells[0] === 1 && cells[1] === 1 && cells[2] === 1) ||
        (cells[3] === 1 && cells[4] === 1 && cells[5] === 1) ||
        (cells[6] === 1 && cells[7] === 1 && cells[8] === 1) ||
        (cells[0] === 1 && cells[3] === 1 && cells[6] === 1) ||
        (cells[1] === 1 && cells[4] === 1 && cells[7] === 1) ||
        (cells[2] === 1 && cells[5] === 1 && cells[8] === 1) ||
        (cells[0] === 1 && cells[4] === 1 && cells[8] === 1) ||
        (cells[2] === 1 && cells[4] === 1 && cells[6] === 1)) {
        $('#content').append(
            $('<div style="display: inline-block; width: 40%; margin-left: 30%;  margin-top: 2%;text-align: center;" id="success" class="alert alert-dismissible alert-success">' +
                '<strong>Congrats, you did it! You won against the AI.</strong>' +
                '</div>').hide().fadeIn(2000).fadeOut(2000));
        $('#game').off('click');

        var currentUserTotalGames = currentUser.get('total');
        currentUser.save('total', currentUserTotalGames + 1);

        var currentUserWins = currentUser.get('wins');
        currentUser.save('wins', currentUserWins + 1);
        return true;
    }

    if ((cells[0] === 0 && cells[1] === 0 && cells[2] === 0) ||
        (cells[3] === 0 && cells[4] === 0 && cells[5] === 0) ||
        (cells[6] === 0 && cells[7] === 0 && cells[8] === 0) ||
        (cells[0] === 0 && cells[3] === 0 && cells[6] === 0) ||
        (cells[1] === 0 && cells[4] === 0 && cells[7] === 0) ||
        (cells[2] === 0 && cells[5] === 0 && cells[8] === 0) ||
        (cells[0] === 0 && cells[4] === 0 && cells[8] === 0) ||
        (cells[2] === 0 && cells[4] === 0 && cells[6] === 0)) {
        $('#content').append(
            $('<div style="display: inline-block; width: 40%; margin-left: 30%;  margin-top: 2%; text-align: center;" class="alert alert-dismissible alert-danger">' +
                '<strong>Sorry, but you lost this time. Why not try again?</strong>' +
                '</div>').hide().fadeIn(2000).fadeOut(2000));
        $('#game').off('click');

        var currentUserTotalGames = currentUser.get('total');
        currentUser.save('total', currentUserTotalGames + 1);

        var currentUserLosses = currentUser.get('losses');
        currentUser.save('losses', currentUserLosses + 1);
        return true;
    }

    var freeCells = cells.filter(function (cellContent) {
        return cellContent === -1;
    }).length;

    if (freeCells === 0) {
        $('#content').append(
            $('<div style="display: inline-block; width: 40%; margin-left: 30%; margin-top: 2%;text-align: center;" class="alert alert-dismissible alert-info">' +
                '<strong>It is a draw! Try harder next time.</strong>' +
                '</div>').hide().fadeIn(2000).fadeOut(2000));
        $('#game').off('click');

        var currentUserTotalGames = currentUser.get('total');
        currentUser.save('total', currentUserTotalGames + 1);

        var currentUserDraws = currentUser.get('draws');
        currentUser.save('draws', currentUserDraws + 1);
        return true;
    }
}

function startGame() {
    var cells = new Array(9).fill(-1);
    $('#game').disableSelection().on('click', function (e) {
        var $target = $(e.target);
        if ($target.attr('id') !== 'game') {
            var cellId = +$target.attr('id') - 1;

            // Check if cell is free
            if (cells[cellId] != 0) {
                cells[cellId] = 1;
                $target.css('background', 'lightgreen').text('O');
                if(!evaluateGameState(cells)) {
                    makeAdvancedMove(cells);
                    evaluateGameState(cells);
                }
            }
        }
    })
}

export {startGame}