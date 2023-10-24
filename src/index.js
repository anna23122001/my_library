const db = require('./db/models');

(async function(){
    const {Sequelize: {Op}} = db;

    db.Order.sync({alter: true});
    db.Customer.sync({alter: true});
    db.Genre.sync({alter: true});
    db.Shelf.sync({alter: true});
    db.Author.sync({alter: true});
    db.Nationality.sync({alter: true});
    db.Book.sync({alter: true});
})();
















