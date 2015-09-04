// TESTS!

if (typeof require !== 'undefined'){
    var Person = require('../js/person.js');
    var Badge = require('../js/badge.js');
    //var Controller = require('../js/controller.js');

    var chai = require('chai');
};

var expect = chai.expect;

describe('Testing the tester', function() {
    var num = 9;
    it('should pass this simple test', function(){
      expect(num).to.equal(9);
    })

});

describe('Testing the Person Ctor', function() {
    
    var jason = new Person();

    jason.name = 'jason'
    jason.username = 'jasonsiren'

    it('should be an Object', function(){
        expect(jason).to.be.an('object');
      

    })
    it('should have a class of Person', function(){
        expect(jason.constructor).to.equal(Person);

    })

    it ('should have a name value of jason', function(){
        expect(jason)
    })

// make an ajax call for a singular person,
// see that it returns a json file
// google aynchronous tests in mocha chai
});

describe('Testing the controller Ctor', function() {

    var controller;
    
    before(function(done){
        controller = new Controller();
        controller.getAndProcessData()
        controller.completedCallback = function(){
            done();
        }
    })
    

    it('should contain an array of people', function(){
        expect(controller.people).to.be.instanceof(Array);

    })
    it('The people array length should be 14', function(){
        expect(controller.people.length).to.equal(14);

    })

    it('the people array should contain a person at index 0', function(){
        expect(controller.people[0]).to.be.instanceof(Person);
    })

});





// Controller.prototype.getAndProcessData = function()

// Controller.prototype.getPersonByUsername = function (name)

// Controller.prototype.badgesOfPerson = function(person)

// Controller.prototype.intersectBadges = function (p1, p2)

// Controller.prototype.getUnearnedBadgesFor = function (person)

// Controller.prototype.similarity = function (p1, p2)

// Controller.prototype.score = function (badge, person)

// Controller.prototype.getRecommendationsFor = function (person)