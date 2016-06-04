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
    },

    listInventory: function() {
        for(var account in this.records) {
            console.log(this.records[account].title);
        };
    },

    // listInventory: function() {
    //     var dave = this.records;
    //     dave.forEach(function(record) {
    //         console.log(record);
    //     });
    // }

    sellRecord: function(record) {
        var i = this.records.indexOf(record);
            if(i != -1) {
            this.balance -= this.records[i].price;
	        this.records.splice(i, 1);
        };
    }


};


module.exports = Store;
