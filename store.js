var _ = require('lodash');

var Store = function( name, city, records, balance ){
    this.name = name;
    this.city = city;
    this.records = records;
    this.balance = balance;
};

Store.prototype = {

    addRecord: function(record) {
        var bloo = this.records.push(record);
        return bloo[0];
    },

    listInventory: function() {
        this.records.forEach(function(record) {
            console.log(record.name);
        });
    }

};

module.exports = Store;
