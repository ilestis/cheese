function Game() {
    var self = this;

    /**
     * Current XP
     * @type {{milk: number, watch: number}}
     */
    self.xp = {
        'farming': {
            'level': 0,
            'amount': 0,
            'increment': 0.5,
            'target': {
                0: 50,
                1: 100,
                2: 220,
                3: 550,
                4: 1370,
                5: 3980,
                6: 11548,
                7: 33489,
                8: 100467,
                9: 301401,
                10: 813783,
                11: 1953079,
                12: 4296774,
                13: 8593548,
                14: 15468386,
                15: 24749418,
                16: 34649185,
                17: 45043941,
                18: 54052729,
                19: 59458002
            }
        },
        'watch': {
            'level': 0,
            'amount': 0,
            'increment': 1,
            'target': 50
        }
    };

    /**
     * Current resources
     */
    self.resources = {
        'milk' : {
            'cow': 0,
            'goat': 0,
            'camel': 0,
            'horse': 0,
            'reindeer': 0,
            'yak': 0
        },
        'money' : 100000000000,
        'watches' : 0
    };

    /**
     * Resale values of items
     * @type {{milk: {cow: number, goat: number, camel: number, horse: number, reindeer: number, yak: number}}}
     */
    self.values = {
        'milk': { // milk cost
            'cow': 1,
            'goat': 2,
            'camel': 5,
            'horse': 25,
            'reindeer': 200,
            'yak': 4000
        },
        'production': { // production per click
            'milk': 1,
            'mps': 0
        }
    };

    /**
     * Activated improvements
     */
    self.improvements = {
        'farming': { // milk cost
            'cow': {
                'enabled': true,
                'cost': 0,
                'level': 0
            },
            'goat': {
                'enabled': false,
                'cost': 50,
                'level': 1
            },
            '1xp': {
                'enabled': false,
                'cost': 40,
                'level': 1
            },
            '2milk': {
                'enabled': false,
                'cost': 250,
                'level': 2
            },
            'camel': {
                'enabled': false,
                'cost': 500,
                'level': 3
            },
            '15xp': {
                'enabled': false,
                'cost': 1000,
                'level': 3
            },
            '3milk': {
                'enabled': false,
                'cost': 25000,
                'level': 4
            },
            'family2': {
                'enabled': false,
                'cost': 30000,
                'level': 4
            },
            'horse': {
                'enabled': false,
                'cost': 10000,
                'level': 5
            },
            'friend2': {
                'enabled': false,
                'cost': 400000,
                'level': 5
            },
            '25xp': {
                'enabled': false,
                'cost': 200000,
                'level': 5
            },
            '5milk': {
                'enabled': false,
                'cost': 300000,
                'level': 6
            },
            'professional2': {
                'enabled': false,
                'cost': 9000000,
                'level': 6
            },
            '5xp': {
                'enabled': false,
                'cost': 10000000,
                'level': 7
            },
            'machine2': {
                'enabled': false,
                'cost': 100000000,
                'level': 7
            },
            'reindeer': {
                'enabled': false,
                'cost': 50000000,
                'level': 8
            },
            'yak': {
                'enabled': false,
                'cost': 2500000000,
                'level': 12
            }
        }
    };

    /**
     * Help
     */
    self.help = {
        'family': {
            'amount': 0,
            'mps': 0.1,
            'mps_base': 0.1,
            'cost': 1000,
            'increment': 1.09
        },
        'friend': {
            'amount': 0,
            'mps': 2.2,
            'mps_base': 2.2,
            'cost': 50000,
            'increment': 1.4
        },
        'professional': {
            'amount': 0,
            'mps': 5.5,
            'mps_base': 5.5,
            'cost': 250000,
            'increment': 1.6
        },
        'machine': {
            'amount': 0,
            'mps': 11,
            'mps_base': 11,
            'cost': 2200000,
            'increment': 1.8
        }
    };

    /**
     * Init the game, events and timers
     */
    self.init = function() {
        console.log('Game initialitation');
        self.initClicks();
        self.initViews();
        self.updateViews();

        self.interval = setInterval(function() { self.timer(); }, 1000);
    };

    self.initClicks = function() {
        $('#cow').click(function() {
            self.clickCow();
        });

        $('#sell_all').click(function() {
            self.sellAll();
        });

        // Sell buttons
        $.each(self.values.milk, function(index, value) {
            $('#milk_' + index + '_sell').click(function() {
               self.sellResource('milk', index);
            });
        });

        // Farming help buttons
        $.each(self.help, function(index, value) {
            $('#farm_' + index + '_buy').click(function() {
                self.hire(index);
            });
        });

        // Farming improvement buttons
        $.each(self.improvements.farming, function(index, value) {
            $('#farming_improvement_' + index + '_buy').click(function() {
                self.buy('farming', index);
            })
        });

    };

    /**
     * Set up some views who won't change once the game is running
     */
    self.initViews = function() {
        $.each(self.values.milk, function(index, value) {
            $('#milk_' + index + '_value').html("CHF " + humanizeNumber(value));
        });

        self.updateImprovementViews();
    };

    /**
     * Sell all resources
     */
    self.sellAll = function() {
        $.each(self.values.milk, function(index, value) {
            self.sellResource('milk', index);
        });
    };

    /**
     * Update the views
     */
    self.updateViews = function() {
        $('#money').text("CHF " + humanizeNumber(self.resources.money));
        $('#watches').text(humanizeNumber(self.resources.watches));

        $.each(self.resources.milk, function(index, value) {
            $('#milk_' + index + '_amount').html(humanizeNumber(value));
        });

        $.each(self.help, function(index, value) {
            $('#farm_' + index + '_amount').html(humanizeNumber(self.help[index].amount));
            $('#farm_' + index + '_effect').html(self.help[index].mps + " MPS");
            $('#farm_' + index + '_cost').html("CHF " + humanizeNumber(self.help[index].cost));
        });

        // XP
        $('#farming_level').html(self.xp.farming.level);
        progress = Math.round((self.xp.farming.amount / self.xp.farming.target[self.xp.farming.level]) * 100);
        $('#farming_progress').css('width', progress+'%').attr('aria-valuenow', progress);

        $('#xpc_amount').html(round(self.xp.farming.increment) + ' XP');
        $('#mpc_amount').html(round(self.values.production.milk) + '');
        $('#mps_amount').html(round(self.values.production.mps) + '');

    };

    /**
     * Sell a resource in exchange for money
     * @param type
     * @param subtype
     */
    self.sellResource = function(type, subtype) {
        amount = self.resources[type][subtype] * self.values[type][subtype];
        self.resources.money += amount;
        self.resources[type][subtype] = 0;
        self.updateViews();
    };

    /**
     * Hire some help.
     * @param type
     */
    self.hire = function(type) {
        // Do we have enough money?
        if (self.resources.money >= self.help[type].cost) {
            self.help[type].amount += 1;
            self.resources.money -= self.help[type].cost;

            // Calc new cost
            self.help[type].cost *= self.help[type].increment;

            self.updateViews();
        }
    };

    self.timer = function() {
        self.updateResources();
        self.updateLevels();
        self.updateViews();
    };

    /**
     * Update the resources the user is automatically generating
     */
    self.updateResources = function() {
        mps = 0;
        $.each(self.help, function(index, value) {
            if (self.help[index].amount > 0) {
                mps += self.help[index].amount * self.help[index].mps;
            }
        });
        self.values.production.mps = mps;

        self.addMilk(mps);
    };

    /**
     * Update the levels based on milestones
     */
    self.updateLevels = function() {

    };

    /**
     * Buy an improvement
     * @param type
     * @param improvement
     */
    self.buy = function(type, improvement) {
        if (self.improvements[type][improvement] && self.improvements[type][improvement].enabled == false) {
            imp = self.improvements[type][improvement];
            // Check for money and level
            if (self.resources.money >= imp.cost && self.xp[type].level >= imp.level) {
                self.resources.money -= imp.cost;
                self.improvements[type][improvement].enabled = true;
                
                self.updateImprovementBonuses();
                self.updateImprovementViews();
            }
        }
    };

    /**
     * Get some milk
     * @param amount
     */
    self.addMilk = function(amount) {
        self.resources.milk.cow += amount;

        // If we have unlocked the others, product some of them
        if (self.hasFI('goat')) {
            self.resources.milk.goat += amount * 0.5;
        }
        if (self.improvements.farming.camel.enabled) {
            self.resources.milk.camel += amount * 0.3;
        }
        if (self.improvements.farming.horse.enabled) {
            self.resources.milk.horse += amount * 0.2;
        }
        if (self.improvements.farming.reindeer.enabled) {
            self.resources.milk.reindeer += amount * 0.1;
        }
        if (self.improvements.farming.yak.enabled) {
            self.resources.milk.yak += amount * 0.05;
        }
    };

    /**
     * Handle clicking on the cow
     */
    self.clickCow = function() {
        milk = self.values.production.milk;
        self.addMilk(milk);

        // Increase xp
        self.addXp('farming');

        self.updateViews();
    };

    /**
     * Add XP to an activity. If it does beyond, lvl up.
     * @param type
     */
    self.addXp = function(type) {
        self.xp[type].amount += self.xp[type].increment;
        // Level up?
        if (self.xp[type].amount >= self.xp[type].target[self.xp[type].level]) {
            self.xp[type].level += 1;
            self.xp[type].amount = 0;

            // Might have some improvements that are now visible
            self.updateImprovementViews();

            self.notifyLevelUp('Your farming skills have improved!');
        }
    };

    /**
     * Notify the user that he has gained a level in something
     * @param text
     */
    self.notifyLevelUp = function(text) {
        $('#notifications').append(
            '<div class="alert alert-success alert-dismissible fade in" role="alert">' +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">×</span>' +
            '</button>' +
            '<strong>Level Up!</strong> ' + text +
            '</div>'
        );
    };

    /**
     * Update values based on bonuses
     */
    self.updateImprovementBonuses = function() {
        // XP
        xp = 0.5;
        if (self.hasFI('1xp')) { xp = 1; }
        if (self.hasFI('15xp')) { xp = 1.5; }
        if (self.hasFI('25xp')) { xp = 2.5; }
        if (self.hasFI('5xp')) { xp = 5; }
        if (self.hasFI('10xp')) { xp = 10; }
        if (self.hasFI('20xp')) { xp = 20; }
        self.xp.farming.increment = xp;

        // Milk
        milk = 1;
        if (self.hasFI('2milk')) { milk = 2; }
        if (self.hasFI('3milk')) { milk = 3; }
        if (self.hasFI('5milk')) { milk = 5; }
        if (self.hasFI('10milk')) { milk = 10; }
        if (self.hasFI('20milk')) { milk = 20; }
        if (self.hasFI('30milk')) { milk = 30; }
        self.values.production.milk = milk;

        // Family
        mps = self.help.family.mps_base;
        if (self.hasFI('family2')) mps *= 1.5; // 50%
        if (self.hasFI('family3')) mps *= 3; // 200%
        if (self.hasFI('family4')) mps *= 7; // 400%
        self.help.family.mps = Math.round(mps * 100) / 100;

        // Friends
        mps = self.help.friend.mps_base;
        if (self.hasFI('friend2')) mps *= 1.5;
        if (self.hasFI('friend3')) mps *= 2;
        if (self.hasFI('friend4')) mps *= 7;
        self.help.friend.mps = Math.round(mps * 100) / 100;

        // Professional
        mps = self.help.professional.mps_base;
        if (self.hasFI('professional2')) mps *= 1.5; // 50%
        if (self.hasFI('professional3')) mps *= 2; // 100%
        if (self.hasFI('professional4')) mps *= 4; // 200%
        self.help.professional.mps = mps;

        // Machine
        mps = self.help.machine.mps_base;
        if (self.hasFI('machine2')) mps *= 1.5; // 50%
        if (self.hasFI('machine3')) mps *= 2; // 100%
        if (self.hasFI('machine4')) mps *= 4; // 200%
        self.help.machine.mps = mps;
    };

    /**
     * Determine if a farming improvement is enabled
     * @param item
     * @returns {*}
     */
    self.hasFI = function(item) {
        if (typeof self.improvements.farming[item] === 'undefined') {
            return false;
        }
        return self.improvements.farming[item].enabled;
    };

    /**
     * Update the visibility of improvements
     */
    self.updateImprovementViews = function() {
        $.each(self.improvements.farming, function(index, value) {
            imp = self.improvements.farming[index];
            sel = $('#farming_improvement_' + index);
            if (sel.length == 1) {
                $('#farming_improvement_' + index + '_cost').html('CHF ' + humanizeNumber(imp.cost));
                $('#farming_improvement_' + index + '_level').html(imp.level);

                // Already activated
                if (imp.enabled) {
                    $('#farming_improvement_' + index + '_buy').attr('disabled', true);
                    $('#farming_improvement_' + index + '_buy').html('Enabled');
                }
                // We can have it
                else if (imp.level <= self.xp.farming.level) {
                    $('#farming_improvement_' + index + '_buy').removeAttr('disabled');
                }
                // Not ready
                else {
                    $('#farming_improvement_' + index + '_buy').attr('disabled', true);
                }
            }

            sel2 = $('#milk_' + index + '_row');
            if (sel2.length == 1 && imp.enabled) {
                sel2.show();
            }
        });
    }
}

/**
 * Make numbers pretty
 * @param n
 * @returns {string|*}
 */
function humanizeNumber(n) {
    n = Math.round(n * Math.pow(10, 2) / Math.pow(10, 2));
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\'");
}

/**
 * Round numbers to 2 decimal points
 * @param n
 * @returns {number}
 */
function round(n) {
    return Math.round(n * 100) / 100;
}

$(document).ready(function() {

    // Init tabs
    $('#gameTabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show')
    });

    // Init game
    var g = new Game();
    g.init();
});
