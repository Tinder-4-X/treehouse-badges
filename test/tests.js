// TESTS!

if (typeof require !== 'undefined'){
    var Person = require('../js/person.js');
    var Badge = require('../js/badge.js');
    //var Controller = require('../js/controller.js');

    var chai = require('chai');
};

var expect = chai.expect;

describe('Testing the tester', function() {
    var num = 9
    it('should ', function(){
      expect(num).to.equal(9);
    })
});

// test making a person object, should be an object
// see that is an instance of person



// describe('Testing the Person Ctor', function() {
    
//     var jason = new Person();

//     jason.name = 'jason'
//     jason.username = 'jasonsiren'

//     it('should be an Object', function(){
//         expect(jason).to.be.an('object');
      

//     })
//     it('should have a class of Person', function(){
//         expect(jason.constructor).to.equal(Person);

//     })

//     it ('should have a name value of jason', function(){
//         expect(jason)
//     })

// // make an ajax call for a singular person,
// // see that it returns a json file
// // google aynchronous tests in mocha chai


// });

// describe('Testing the controller Ctor', function() {

//     var controller = new Controller();
//     controller.getAndProcessData();

//     it('should contain an array of people', function(){
//         expect(controller.people).to.be.instanceof(Array);;

//     })
// });

