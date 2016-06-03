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
  });

  it('should add an account', function(){
      console.log(bank1);
      bank1.addAccount(account1);
      console.log(bank1);
      assert.equal(1, bank1.accounts.length);
  });



});
