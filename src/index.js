const db = require('./db/models');

(async function(){
    const {Sequelize: {Op}} = db;

    db.Order.sync({alter: true});
    db.Customer.sync({alter: true});
})();
















