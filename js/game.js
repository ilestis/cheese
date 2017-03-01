function Game() {
    var self = this;

    /**
     * Version of the game
     */
    self.version = '0.0.3';

    /**
     * Progress of the game. All data that is savable
     * @type {{}}
     */
    self.progress = {
        'money': 0,
        'account': 0,
        'xp': {
            'farming': 0,
            'watch': 0
        },
        'xp_increment': {
            'farming': 0.5, // 100 clicks for level 1
            'watch': 10 // 5 watches for level 1
        },
        'level': {
            'farming': 0,
            'watch': 0
        },
        'production': {
            'milk': 1
        },
        'improvements': {
            'farming': {
                'cow': true
            },
            'watch': {
                'swatch': true
            },
            'store': {
            }
        },
        'help': {
            'family': 0,
            'friend': 0,
            'professional': 0,
            'machine': 0
        },
        'milk': {
            'cow': 0,
            'goat': 0,
            'camel': 0,
            'horse': 0,
            'reindeer': 0,
            'yak': 0
        }
    };

    self.bonus = {
        'farming': {
            'xp': 0,
            'production': 0
        }
    };

    /**
     * Current XP
     * @type {{milk: number, watch: number}}
     */
    self.xp = {
        'farming': {
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
        }
    };

    /**
     * Types of milk and their value
     * @type {{cow: number, goat: number, camel: number, horse: number, reindeer: number, yak: number}}
     */
    self.milk = {
        'cow': 1,
        'goat': 2,
        'camel': 5,
        'horse': 25,
        'reindeer': 200,
        'yak': 4000
    };

    /**
     * Bonus provided by the store improvements
     * @type {{cash: number, xp: number}}
     */
    self.store = {
        'cash': 0,
        'xp': 0
    };

    /**
     * Boolean if a watch is currently visible
     * @type {boolean}
     */
    self.visibleWatch = false;
    self.bonusActive = false;

    /**
     * Activated improvements
     */
    self.improvements = {
        'farming': { // milk cost
            'cow': {
                'cost': 0,
                'level': 0
            },
            'goat': {
                'cost': 50,
                'level': 1
            },
            '1xp': {
                'cost': 40,
                'level': 1
            },
            '2milk': {
                'cost': 250,
                'level': 2
            },
            'camel': {
                'cost': 500,
                'level': 3
            },
            '15xp': {
                'cost': 1000,
                'level': 3
            },
            '3milk': {
                'cost': 25000,
                'level': 4
            },
            'family2': {
                'cost': 30000,
                'level': 4
            },
            'horse': {
                'cost': 10000,
                'level': 5
            },
            'friend2': {
                'cost': 400000,
                'level': 5
            },
            '25xp': {
                'cost': 200000,
                'level': 5
            },
            '5milk': {
                'cost': 300000,
                'level': 6
            },
            'professional2': {
                'cost': 9000000,
                'level': 6
            },
            '5xp': {
                'cost': 10000000,
                'level': 7
            },
            'machine2': {
                'cost': 100000000,
                'level': 7
            },
            'reindeer': {
                'cost': 50000000,
                'level': 8
            },
            'yak': {
                'cost': 2500000000,
                'level': 12
            }
        },
        'watch': {
            'swatch': {
                'cost': '0',
                'level': 0,
                'xp': 25
            },
            'frequency1': {
                'cost': 500,
                'level': 1
            },
            'duration1': {
                'cost': 750,
                'level': 1
            },
            'rare1': {
                'cost': 2000,
                'level': 1
            },
            'tissot': {
                'cost': 15000,
                'level': 2,
                'xp': 100
            },
            'frequency2': {
                'cost': 40000,
                'level': 2
            },
            'rare2': {
                'cost': 20000,
                'level': 2
            },
            'duration2': {
                'cost': 60000,
                'level': 3
            },
            'xp1': {
                'cost': 90000,
                'level': 3
            },
            'omega': {
                'cost': 200000,
                'level': 4,
                'xp': 500
            }
        },
        'store': {
            'cash1': {
                'cost': 1
            },
            'cash2': {
                'cost': 5
            },
            'cash3': {
                'cost': 25
            },
            'cash4': {
                'cost': 50
            },
            'cash5': {
                'cost': 100
            },
            'cash6': {
                'cost': 250
            },
            'cash7': {
                'cost': 350
            },
            'cash8': {
                'cost': 500
            },
            'xp1': {
                'cost': 1
            },
            'xp2': {
                'cost': 5
            },
            'xp3': {
                'cost': 25
            },
            'xp4': {
                'cost': 50
            },
            'xp5': {
                'cost': 100
            },
            'xp6': {
                'cost': 250
            },
            'xp7': {
                'cost': 350
            },
            'xp8': {
                'cost': 500
            }
        }
    };

    /**
     * Help
     */
    self.help = {
        'family': {
            'mps': 0.1,
            'mps_base': 0.1,
            'cost': 1000,
            'increment': 1.09
        },
        'friend': {
            'mps': 2.2,
            'mps_base':2.2,
            'cost': 50000,
            'increment': 1.4
        },
        'professional': {
            'mps': 5.5,
            'mps_base': 5.5,
            'cost': 250000,
            'increment': 1.6
        },
        'machine': {
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
        console.log('Game initialisation');

        // Load data
        self.load();

        self.initClicks();
        self.initViews();
        self.updateViews();
        self.updateImprovementBonuses();

        self.interval = setInterval(function() { self.timer(); }, 1000);
        self.interval = setInterval(function() { self.save(); }, 10000);
    };

    /**
     * Initialize some clicks
     */
    self.initClicks = function() {
        $('#cow').click(function() {
            self.clickCow();
        });

        $('#sell_all').click(function() {
            self.sellAll();
        });

        $('#sell_all_2').click(function() {
            self.sellAll();
        });

        $('#save').click(function() {
            self.save();
        });

        // Sell buttons per resources
        $.each(self.milk, function(index, value) {
            $('#milk_' + index + '_sell').click(function() {
               self.sellMilk(index);
            });
        });

        // farm help buttons
        $.each(self.help, function(index, value) {
            $('#farming_' + index + '_buy').click(function() {
                self.hire(index);
            });
        });

        // farm improvement buttons
        $.each(self.improvements.farming, function(index, value) {
            $('#farming_improvement_' + index + '_buy').click(function() {
                self.buy('farming', index);
            })
        });

        // watch improvement buttons
        $.each(self.improvements.watch, function(index, value) {
            $('#watch_improvement_' + index + '_buy').click(function() {
                self.buy('watch', index);
            })
        });

        // store improvement buttons
        $.each(self.improvements.store, function(index, value) {
            $('#store_improvement_' + index + '_buy').click(function() {
                self.buy('store', index);
            })
        });

    };

    /**
     * Set up some views who won't change once the game is running
     */
    self.initViews = function() {
        $.each(self.milk, function(index, value) {
            $('#milk_' + index + '_value').html("CHF " + humanizeNumber(self.milk[index]));
        });

        self.updateImprovementViews();
        self.updateHelpViews();
    };

    /**
     * Sell all resources
     */
    self.sellAll = function() {
        $.each(self.milk, function(index, value) {
            amount = self.getMilk(index) * self.milk[index];
            self.addMoney(amount);
            self.resetMilk(index);
        });

        self.updateViews();
    };

    /**
     * Update the views
     */
    self.updateViews = function() {
        $('#money').text("CHF " + humanizeNumber(self.getMoney()));
        $('#accounts').text("Accounts " + humanizeNumber(self.getAccount()));

        $.each(self.milk, function(index, value) {
            $('#milk_' + index + '_amount').html(humanizeNumber(self.getMilk(index)));
        });

        // Farming XP
        $('#farming_level').html(self.getLevel('farming'));
        progress = Math.round((self.getXP('farming') / self.xp.farming.target[self.getLevel('farming')]) * 100);
        $('#farming_progress').css('width', progress+'%').attr('aria-valuenow', progress);

        $('#xpc_amount').html(round(self.getXPIncrement('farming')) + ' XP');
        $('#mpc_amount').html(round(self.getProduction('milk')) + '');
        $('#mps_amount').html(round(self.getMps()) + '');

        // Watch XP
        $('#watch_level').html(self.getLevel('watch'));
        progress = Math.round((self.getXP('watch') / self.xp.watch.target[self.getLevel('watch')]) * 100);
        $('#watch_progress').css('width', progress+'%').attr('aria-valuenow', progress);
    };

    /**
     * Sell a resource in exchange for money
     * @param type
     * @param subtype
     */
    self.sellMilk = function(type) {
        amount = self.getMilk(type) * self.milk[type];
        self.addMoney(amount);
        self.resetMilk(type);
        self.updateViews();
    };

    /**
     * Hire some help.
     * @param type
     */
    self.hire = function(type) {
        // Do we have enough money?
        var cost = self.getHelpCost(type);
        if (self.getMoney() >= cost) {
            self.addHelp(type);
            self.removeMoney(cost);

            self.updateViews();
            self.updateHelpViews();
        }
    };

    self.timer = function() {
        self.generateWatch();

        self.updateResources();
        self.updateLevels();
        self.updateViews();
    };

    /**
     * Update the resources the user is automatically generating
     */
    self.updateResources = function() {
        mps = self.getMps();
        self.produceMilk(mps);

        chps = self.getChps();
        self.addMoney(chps);
    };

    /**
     * calculate the milk per seconds
     * @returns {number}
     */
    self.getMps = function() {
        var mps = 0;
        $.each(self.help, function(index, value) {
            if (self.getHelp(index) > 0) {
                mps += self.getHelp(index) * self.help[index].mps;
            }
        });
        return mps;
    };

    /**
     * Calculate the ch per seconds
     * @returns {number}
     */
    self.getChps = function() {
        return self.store.cash;
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
        if (self.hasImprovement(type, improvement) == false) {
            imp = self.improvements[type][improvement];

            if (type == 'store') {
                if (self.getAccount() >= imp.cost) {
                    self.removeAccount(imp.cost);
                    self.enableImprovement(type, improvement);

                    self.updateImprovementBonuses();
                    self.updateImprovementViews();
                    self.updateHelpViews();
                }
            } else {
                // Check for money and level
                if (self.getMoney() >= imp.cost && self.getLevel(type) >= imp.level) {
                    self.removeMoney(imp.cost);
                    self.enableImprovement(type, improvement);

                    self.updateImprovementBonuses();
                    self.updateImprovementViews();
                    self.updateHelpViews();
                }
            }
        }
    };

    /**
     * Generate a watch
     */
    self.generateWatch = function() {
        if (!self.visibleWatch && !self.bonusActive) {
            chance = 1; // Percentage change of having a watch appear every second
            // Increase chance
            if (self.hasImprovement('watch', 'frequency1')) chance += 1;
            if (self.hasImprovement('watch', 'frequency2')) chance += 1;
            if (self.hasImprovement('watch', 'frequency3')) chance += 1;
            if (self.hasImprovement('watch', 'frequency4')) chance += 2;

            random = Math.floor((Math.random() * 100) + 1);

            if (random <= chance) {
                self.visibleWatch = true;
                // We are generating a watch.
                watch = self.getRandomWatch();

                $('#flag').html('<div class="watch watch_'+watch+'" id="watch" data-watch="'+watch+'"></div>');
                $('#watch').click(function() {
                    self.clickWatch($(this).attr('data-watch'));
                });

                // Set timer to remove the watch
                timeout = 20; // seconds
                if (self.hasImprovement('watch', 'duration1')) timeout += 1;
                if (self.hasImprovement('watch', 'duration2')) timeout += 1;
                if (self.hasImprovement('watch', 'duration3')) timeout += 2;

                self.interval = setTimeout(function() { self.removeWatch(); }, timeout*1000);
            }
        }
    };

    self.clickWatch = function(watch) {
        if (self.visibleWatch) {
            self.visibleWatch = false;

            // Increase xp
            self.incrementXP('watch');
            $('#watch').remove();

            random = Math.floor((Math.random() * 100));
            if (random < 90) {
                // Chance of generating some accounts? Or bonuses?
                if (watch == 'swatch') {
                    self.bonus.farming.xp = 1;
                    self.bonus.farming.production = 1;
                    duration = 10;
                }
                else if (watch == 'tissot') {
                    self.bonus.farming.xp = 2;
                    self.bonus.farming.production = 2;
                    duration = 15;
                }
                else if (watch == 'omega') {
                    self.bonus.farming.xp = 5;
                    self.bonus.farming.production = 3;
                    duration = 20;
                }
                else if (watch == 'ulysse') {
                    self.bonus.farming.xp = 10;
                    self.bonus.farming.production = 4;
                    duration = 25;
                }
                else if (watch == 'rolex') {
                    self.bonus.farming.xp = 20;
                    self.bonus.farming.production = 5;
                    duration = 30;
                }
                var sel = $('#watch_bonus');
                sel.show();

                self.addWatchBonus(duration);
                self.bonusActive = true;
            }
            else {
                // 10% change of producing accounts
                accounts = 1;
                if (self.hasImprovement('watch', 'rare1')) accounts += 1;
                if (self.hasImprovement('watch', 'rare2')) accounts += 2;
                if (self.hasImprovement('watch', 'rare3')) accounts += 3;
                if (self.hasImprovement('watch', 'rare4')) accounts += 4;

                self.addAccount(accounts);

                self.notifyAccount('Inside the watch was the IBAN and codes to ' + accounts + ' hidden account' + (accounts > 1 ? 's' : '') + '.');
            }

            self.updateViews();
        }
    };

    self.addWatchBonus = function(duration) {
        var sel = $('#watch_bonus');
        sel.attr('data-duration', duration);
        sel.html('Bonus! ' + self.bonus.farming.xp + ' XP and +' + self.bonus.farming.production + ' milk per click for ' + duration + ' seconds');
        var timeout = setTimeout(self.timeoutBonus, 1000);
    };

    /**
     *
     */
    self.timeoutBonus = function() {
        var sel = $('#watch_bonus');
        remaining = sel.attr('data-duration');
        if (remaining <= 1) {
            // End if
            self.removeBonus();
        } else {
            remaining--;
            sel.attr('data-duration', remaining);
            sel.html('Bonus! ' + self.bonus.farming.xp + ' XP and +' + self.bonus.farming.production + ' milk per click for ' + remaining + ' seconds');
            var timeout = setTimeout(self.timeoutBonus, 1000);
        }
    };

    /**
     * Remove the watch
     */
    self.removeWatch = function() {
        if (self.visibleWatch) {
            self.visibleWatch = false;
            $('#watch').remove();
        }
    };

    /**
     * End of bonus
     */
    self.removeBonus = function() {
        self.bonus.farming.xp = 0;
        self.bonus.farming.production = 0;
        self.bonusActive = false;

        var sel = $('#watch_bonus');
        sel.hide();
    };

    /**
     * Get a random watch
     * @returns {*}
     */
    self.getRandomWatch = function() {
        random = Math.floor(Math.random() * 100);
        if (random < 30) {
            if (self.hasImprovement('watch', 'tissot')) {
                return 'tissot';
            }
            return 'swatch';
        }
        else if (random >= 30 && random < 50) {
            if (self.hasImprovement('watch', 'omega')) {
                return 'omega';
            }
            return 'swatch';
        }

        return 'swatch';
    };

    /**
     * Determine if an improvement has been activated
     * @param type
     * @param improvement
     * @returns {*}
     */
    self.hasImprovement = function(type, improvement) {
        if (typeof(self.progress.improvements[type][improvement]) === 'undefined') {
            self.progress.improvements[type][improvement] = false;
        }
        return self.progress.improvements[type][improvement];
    };

    /**
     * Activate en improvement
     * @param type
     * @param improvement
     */
    self.enableImprovement = function(type, improvement) {
        self.progress.improvements[type][improvement] = true;
    };

    /**
     * Handle clicking on the cow
     */
    self.clickCow = function() {
        milk = self.getProduction('milk');

        // Bonus to farming?
        if (self.bonus.farming.production > 0) {
            milk += self.bonus.farming.production;
        }

        self.produceMilk(milk);

        // Increase xp
        self.incrementXP('farming');

        self.updateViews();
    };

    /**
     * Produce milk by clicking or by workers
     * @param amount
     */
    self.produceMilk = function(amount) {
        self.addMilk('cow', amount);

        // If we have unlocked the others, product some of them
        if (self.hasImprovement('farming', 'goat')) {
            self.addMilk('goat', amount * 0.5);
        }
        if (self.hasImprovement('farming', 'camel')) {
            self.addMilk('camel', amount * 0.3);
        }
        if (self.hasImprovement('farming', 'horse')) {
            self.addMilk('horse', amount * 0.2);
        }
        if (self.hasImprovement('farming', 'reindeer')) {
            self.addMilk('reindeer', amount * 0.1);
        }
        if (self.hasImprovement('farming', 'yak')) {
            self.addMilk('yak', amount * 0.05);
        }
    };

    /**
     * Add XP to an activity. If it does beyond, lvl up.
     * @param type
     */
    self.incrementXP = function(type) {
        var amount = self.getXPIncrement(type);

        // Farming has temp bonuses available
        if (type == 'farming' && self.bonus.farming.xp > 0) {
            amount += self.bonus.farming.xp;
        }

        // Store bonus?
        if (self.store.xp > 0) {
            amount *= 1 + (self.store.xp / 100);
            amount = Math.round(amount * 100) / 100;
        }

        self.addXP(type, amount);

        // Level up?
        if (self.getXP(type) >= self.xp[type].target[self.getLevel(type)]) {
            self.addLevel(type);
            self.resetXP(type);

            // Might have some improvements that are now visible
            self.updateImprovementViews();

            self.notifyLevelUp('Your farm skills have improved!');
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
     * Notify that account has increased
     * @param text
     */
    self.notifyAccount = function(text) {
        $('#notifications').append(
            '<div class="alert alert-success alert-dismissible fade in" role="alert">' +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">×</span>' +
            '</button>' +
            '<strong>Account found!</strong> ' + text +
            '</div>'
        );
    };

    /**
     * Update values based on bonuses
     */
    self.updateImprovementBonuses = function() {
        // XP
        var xp = 0.5;
        if (self.hasFI('1xp')) { xp = 1; }
        if (self.hasFI('15xp')) { xp = 1.5; }
        if (self.hasFI('25xp')) { xp = 2.5; }
        if (self.hasFI('5xp')) { xp = 5; }
        if (self.hasFI('10xp')) { xp = 10; }
        if (self.hasFI('20xp')) { xp = 20; }
        self.setXPIncrement('farming', xp);

        // Family
        var mps = self.help.family.mps_base;
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
        self.help.professional.mps = Math.round(mps * 100) / 100;

        // Machine
        mps = self.help.machine.mps_base;
        if (self.hasFI('machine2')) mps *= 1.5; // 50%
        if (self.hasFI('machine3')) mps *= 2; // 100%
        if (self.hasFI('machine4')) mps *= 4; // 200%
        self.help.machine.mps = Math.round(mps * 100) / 100;

        // Watch XP
        xp = 10;
        if (self.hasImprovement('watch', 'xp1')) { xp += 1; }
        self.setXPIncrement('watch', xp);

        // Store cash
        var cash = 0;
        if (self.hasImprovement('store', 'cash1')) cash += 1;
        if (self.hasImprovement('store', 'cash2')) cash += 5;
        if (self.hasImprovement('store', 'cash3')) cash += 25;
        if (self.hasImprovement('store', 'cash4')) cash += 100;
        if (self.hasImprovement('store', 'cash5')) cash += 500;
        if (self.hasImprovement('store', 'cash6')) cash += 2500;
        if (self.hasImprovement('store', 'cash7')) cash += 7500;
        if (self.hasImprovement('store', 'cash8')) cash += 25000;
        self.store.cash = cash;

        // Store xp
        xp = 0;
        if (self.hasImprovement('store', 'xp1')) xp += 1;
        if (self.hasImprovement('store', 'xp2')) xp += 1;
        if (self.hasImprovement('store', 'xp3')) xp += 1;
        if (self.hasImprovement('store', 'xp4')) xp += 1;
        if (self.hasImprovement('store', 'xp5')) xp += 1;
        if (self.hasImprovement('store', 'xp6')) xp += 1;
        if (self.hasImprovement('store', 'xp7')) xp += 1;
        if (self.hasImprovement('store', 'xp8')) xp += 1;
        self.store.xp = xp;
    };

    /**
     * Determine if a farm improvement is enabled
     * @param item
     * @returns {*}
     */
    self.hasFI = function(item) {
        return self.hasImprovement('farming', item);
    };

    /**
     * Update the visibility of improvements
     */
    self.updateImprovementViews = function() {
        $.each(self.improvements.farming, function(index, value) {
            self.parseImprovement('farming', index);

            // Animal?
            sel2 = $('#milk_' + index + '_row');
            if (sel2.length == 1 && self.hasImprovement('farming', index)) {
                sel2.show();
            }
        });

        $.each(self.improvements.watch, function(index, value) {
            self.parseImprovement('watch', index);
        });

        $.each(self.improvements.store, function(index, value) {
            self.parseImprovement('store', index);
        });
    };

    /**
     * Update Helper Views
     */
    self.updateHelpViews = function() {
        $.each(self.help, function (index, value) {
            $('#farming_' + index + '_amount').html(humanizeNumber(self.getHelp(index)));
            $('#farming_' + index + '_effect').html(self.help[index].mps + " MPS");
            $('#farming_' + index + '_cost').html("CHF " + humanizeNumber(self.getHelpCost(index)));
        });
    };

    /**
     * Parse an improvement to make it pretty in html
     * @param type
     * @param index
     */
    self.parseImprovement = function(type, index) {
        var imp = self.improvements[type][index];
        var preSelector = '#' + type + '_improvement_';
        var sel = $(preSelector + index);
        if (sel.length == 1) {

            // Store costs accounts, not money
            if (type == 'store') {
                $(preSelector + index + '_cost').html(humanizeNumber(imp.cost));
            } else {
                $(preSelector + index + '_cost').html('CHF ' + humanizeNumber(imp.cost));
            }

            // Level limitation
            if (imp.level) {
                $(preSelector + index + '_level').html(imp.level);
            }

            // Already activated
            if (self.hasImprovement(type, index)) {
                $(preSelector + index + '_buy').attr('disabled', true);
                $(preSelector + index + '_buy').html('Enabled');
            }
            // We can have it
            else if (typeof(imp.level) == 'undefined' || imp.level <= self.getLevel(type)) {
                $(preSelector + index + '_buy').removeAttr('disabled');
            }
            // Not ready
            else {
                $(preSelector + index + '_buy').attr('disabled', true);
            }
        }
    };

    self.getProduction = function(type) {
        if (type == 'milk') {
            var milk = 1;
            if (self.hasFI('2milk')) { milk = 2; }
            if (self.hasFI('3milk')) { milk = 3; }
            if (self.hasFI('5milk')) { milk = 5; }
            if (self.hasFI('10milk')) { milk = 10; }
            if (self.hasFI('20milk')) { milk = 20; }
            if (self.hasFI('30milk')) { milk = 30; }
            return milk;
        }
    };

    /**
     * Get level of something
     * @param type
     * @param subtype
     * @returns {*}
     */
    self.getLevel = function(type) {
        return self.progress.level[type];
    };

    /**
     * Add a level
     * @param type
     */
    self.addLevel = function(type) {
        self.progress.level[type] += 1;
    };

    /**
     * Get XP
     * @param type
     * @returns {*}
     */
    self.getXP = function(type) {
        return self.progress.xp[type];
    };

    /**
     * Add XP
     * @param type
     * @param amount
     */
    self.addXP = function(type, amount) {
        self.progress.xp[type] += amount;
    };

    /**
     * Reset XP
     * @param type
     */
    self.resetXP = function(type) {
        self.progress.xp[type] = 0;
    };

    /**
     * XP Increment
     * @param type
     * @returns {*}
     */
    self.getXPIncrement = function(type) {
        return self.progress.xp_increment[type];
    };
    self.setXPIncrement = function(type, value) {
        self.progress.xp_increment[type] = value;
    };


    /**
     * Money getters and setters
     * @returns {number}
     */
    self.getMoney = function() {
        return self.progress.money;
    };
    self.addMoney = function(amount) {
        self.progress.money += amount;
    };
    self.removeMoney = function(amount) {
        self.progress.money -= amount;
    };

    /**
     * Account getters and setters
     * @returns {number}
     */
    self.getAccount = function() {
        return self.progress.account;
    };

    self.addAccount = function(amount) {
        self.progress.account += amount;
    };

    self.removeAccount = function(amount) {
        self.progress.account -= amount;
    };

    /**
     * Help
     */
    self.getHelp = function(item) {
        return self.progress.help[item];
    };
    self.addHelp = function(item) {
        self.progress.help[item] += 1;
    };
    self.getHelpMps = function(item) {
        val = self.help[item].mps * (1+self.getHelp(item));
        return Math.round(val * 100) / 100;
    };
    self.getHelpCost = function(item) {
        cost = self.help[item].cost;

        for (i = 0; i < self.getHelp(item); i++) {
            cost *= self.help[item].increment;
        }
        return cost;
    };

    /**
     * Resources
     */
    self.getMilk = function(item) {
        return self.progress.milk[item];
    };
    self.addMilk = function(item, amount) {
        self.progress.milk[item] += amount;
    };
    self.resetMilk = function(item) {
        self.progress.milk[item] = 0;
    };

    /**
     * Store
     */
    self.hasStore = function(item) {
        if (typeof(self.progress.store[item]) == 'undefined') {
            self.progress.store[item] = false;
        }
        return self.progress.store[item];
    };
    self.setStore = function(item) {
        self.progress.store[item] = true;
    };


    /**
     * Save progress
     */
    self.save = function() {
        var sel = $('#save');
        sel.attr('disabled', true);
        sel.text('Saving...');
        if (typeof(Storage) !== "undefined") {
            data = JSON.stringify(self.progress);
            localStorage.setItem('progress', data);
        }

        var timeout = setTimeout(self.enableSave, 800); // pretend saving takes a while
    };

    /**
     * Renable the save button
     */
    self.enableSave = function() {
        var sel = $('#save');
        sel.attr('disabled', false);
        sel.text('Save');
    };

    /**
     * Load data
     */
    self.load = function() {
        if (typeof(Storage) !== "undefined") {
            var progress = localStorage.getItem('progress');
            if (progress !== null) {
                self.progress = JSON.parse(progress);

                // Fix starting watch increment to 10 if it started wrong
                if (self.progress.xp_increment.watch < 10) {
                    self.progress.xp_increment.watch += 9;
                }

                // Add store improvements
                if (typeof(self.progress.improvements.store) == 'undefined') {
                    self.progress.improvements.store = {};
                }
            }
        }
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
