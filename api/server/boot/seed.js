var chalk = require('chalk');

console.log(chalk.magenta('Lets seed this app!'));

/*
This script is based on: 
https://github.com/strongloop-training/coffee-time/blob/master/server/boot/create-sample-model-data.js
*/

module.exports = function(app) {
    var account = {
        email: "email@test.com",
        password: "password"
    }

    app.models.Account.create(account, function(err, record) {
        if (err) { return console.log(chalk.red(err.message)); }

        var targets = [
            {
                title:'Content One', 
                description:'Body One',
                totalValue: 500,
                endDate: new Date(),
                accountId: record.id
            },
            {
                title:'Content Two', 
                description:"Body Two",
                totalValue: 300,
                endDate: new Date(),
                accountId: record.id
            },
            {
                title:'Content Three', 
                description:'Body Three',
                totalValue: 200,
                endDate: new Date(),
                accountId: record.id
            }
        ];
        
        app.models.Target.create(targets, function(err, records) {
            if (err) { return console.log(chalk.red(err.message)); }
            console.log(chalk.magenta('Done seeding data, '+records.length+' records created.'));
        });
    });

    //sample data
   
    
}