const db = require('./conn');

class Coffee {
    constructor(id, name, bespoke, size) {
        this.id = id;
        this.name = name;
        this.bespoke = bespoke;
        this.size = size;
    }
    static getById(id) {
        return db.one(`select * from coffee where id=${id}`)
        .then((oneCoffeeData) => {
            const coffeeInstance = new Coffee(
                oneCoffeeData.id,
                oneCoffeeData.name,
                oneCoffeeData.bespoke,
                oneCoffeeData.size
                );
            return coffeeInstance;
        })
        .catch((err) => {
            return err;
        });
    }
    save() {
        return db.result(`
        update coffee set 
        name = ${this.name},
        bespoke = ${this.bespoke},
        size = ${this.size},
        where id = ${this.id}
        `);
    }
}


function getAll() {
    return db.any(`
        select * from coffee
        `)
    // .then((data) => {
    //     console.log('here is the data:');
    //     console.log(data);
    // })
    .catch((error) => {
        console.log('ruh roh....');
        console.log(error);
    });
};


function getOne(id) {
    return db.one(
            `select * from coffee where id=$1`, [id])
    .catch((error) => {
        console.log('ruh roh....');
        console.log(error);
    });
};


module.exports = {Coffee, getAll, getOne};