var _ = require('lodash');

var Store = function( name, city, records, balance ){
    this.name = name;
    this.city = city;
    this.records = records;
    this.balance = balance;
};

Store.prototype = {

    addRecord: function(record) {
        this.records.push(record);
    }

};

module.exports = Store;
