// Modules
const moment = require('moment-timezone');
const colors = require('colors/safe');

// User Creator for the example
const createUser = function(user, show) {

    if (!user) {
        user = {};
    }

    // Timezone Generator
    if ((typeof user.timezone != "string") || (!user.timezone)) {
        if (show) {
            console.warn(colors.yellow("You don't have a timezone. Your timezone has been detected automatically."));
        }
        user.timezone = moment.tz.guess();
    } else {
        if (show) {
            console.log(colors.green("Timezone loaded"));
        }
    }

    // Show your timezone for another users
    if (typeof user.show != "number") {
        user.show = 1;
        if (show) {
            console.log("Using default Option (You're showing your timezone for everyone)");
        }
    } else {

        if (user.show == 1) {
            if (show) {
                console.log("You're showing your timezone for " + colors.green("everyone"));
            }
        } else if (user.show == 2) {
            if (show) {
                console.warn("You're showing your timezone for " + colors.yellow("friends only"));
            }
        } else {
            user.show = 0;
            if (show) {
                console.log("Your timezone is " + colors.red("private"));
            }
        }

    }

    return user;

};

console.log("Timezone Example using client side. Made by Jasmin Dreasond - " + colors.grey('https://github.com/JasminDreasond'));
console.log("Module Used: moment-timezone - " + colors.grey('http://momentjs.com/timezone/\n'));

// User Config Simulator
console.log(colors.grey("Loading User CFG..."));
const usercfg = require('./user.json');

usercfg.you = createUser(usercfg.you, true);
for (var user in usercfg.users) {
    usercfg.users[user] = createUser(usercfg.users[user]);
}

// User Timezone
console.log("Your timezone is " + colors.cyan(usercfg.you.timezone + " (" +
        moment.tz(usercfg.you.timezone).zoneAbbr() + ")") + " at zone " +
    colors.cyan(moment.tz(usercfg.you.timezone).format('Z')));

usercfg.you.computer = moment.tz.guess();

console.log("Your computer timezone is " + colors.cyan(moment.tz(usercfg.you.computer).format('Z')));


// Load Complete
console.log(colors.green("\n\nLoading Complete!"), usercfg);









// Simulate Profile Open
setTimeout(function() {
    console.log(colors.grey('\n\nClicking on user profile...'));
}, 1000);

setTimeout(function() {

    // Clicking...
    for (var user in usercfg.users) {



        // Check user permissions
        if (

            // User will show your timezone for everyone
            (usercfg.users[user].show == 1) ||

            // User will show your timezone if you're a user friend
            ((usercfg.users[user].show == 2) && (usercfg.users[user].isFriend))

        ) {

            // Showing :3
            console.log(

                'The ' + colors.cyan(user + '\'s clock') + ' is ' +

                colors.green(
                    moment().tz(usercfg.users[user].timezone).format("MM/DD/YYYY HH:mm:ss Z")
                )

            );

        } else {

            // Nope :c
            console.log(colors.red('You don\'t have permission to view the ' + user + '\'s clock'));

        }



    }

}, 2000);







// Coverting clock message
setTimeout(function() {
    console.log(colors.grey('\n\nCoverting clock message...'));
}, 5000);

setTimeout(function() {

    // Clicking...
    for (var user in usercfg.users) {


        // Check user permissions
        if (

            // User will show your timezone for everyone
            (usercfg.users[user].show == 1) ||

            // User will show your timezone if you're a user friend
            ((usercfg.users[user].show == 2) && (usercfg.users[user].isFriend))

        ) {

            var tinyTime = moment.tz(usercfg.time_test, usercfg.users[user].timezone);

            console.log(

                colors.cyan(user) + ' at ' + colors.cyan(moment.tz(usercfg.users[user].timezone).format('Z')) +
                ' sent the time ' +

                colors.green(
                    tinyTime.format("MM/DD/YYYY HH:mm:ss Z")
                )

            );

            // Showing :3
            console.log(

                'The ' + colors.cyan(user + '\'s clock') + ' corveted is ' +

                colors.green(
                    tinyTime.utcOffset(moment.tz(usercfg.you.computer).format('Z')).format("MM/DD/YYYY HH:mm:ss Z")
                )

            );

        } else {

            // Nope :c
            console.log(colors.red('You don\'t have permission to view the ' + user + '\'s clock'));

        }


    }


}, 6000);








// Yay :3
setInterval(function() {}, 1000);