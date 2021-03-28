const orm = require('../config/orm.js');

const burger = {
    all: function(cb){
        orm.all('burgers',function(res){
            cb(res);
        })
    },

    update: function(id,cb){
        orm.update('burgers',{devoured : 1}, `id = ${id}`, cb);
    },

    create: function(name,cb){
        orm.create('burgers', 'burger_name', [name], cb);
    },
};

module.exports = burger;