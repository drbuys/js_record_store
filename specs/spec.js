var Store = require('../store.js');
var Record = require('../record.js');
var Customer = require('../customer.js');
var assert = require('chai').assert;


describe('Store', function() {

  beforeEach(function(){
      record1 = new Record("The Smashing Pumpkins", "Today", 5.50);
      record2 = new Record("The Smashing Pumpkins", "Mayonaise", 6.50);
      record3 = new Record("The Smashing Pumpkins", "Zero", 5.00);
      record4 = new Record("Andrew Kenny", "Church Mouse in the Church House", 4.50);
      record5 = new Record("Postal Service", "Such Great Heights", 4.80);
      record6 = new Record("Styrofoam", "Misguided", 7.00);
      store1 = new Store("Zaks", "Edinburgh", [], 500)
  });

  it('should add a record', function(){
      console.log(store1);
      store1.addRecord(record1);
      store1.addRecord(record2);
      console.log(store1);
      assert.equal(2, store1.records.length);
  });

  it('should list and Inventory of stock for store', function(){
      store1.addRecord(record1);
      store1.addRecord(record2);
      console.log(store1.listInventory());
      assert.equal(2, store1.records.length);
  });

  it('should sell a record and change balance appropriatley', function(){
      store1.addRecord(record1);
      store1.addRecord(record2);
      store1.addRecord(record3);
      store1.addRecord(record4);
      store1.addRecord(record5);
      store1.addRecord(record6);
      console.log(store1.records);
          store1.sellRecord(record6);
      console.log(store1.records);
      assert.equal(493, store1.balance);
  });



});
