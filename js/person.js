if (typeof require !== "undefined") {
	require("./badge.js");
}

// person.js

// person object needs:

// name
// userName
// badges
// gravatar address - linked to treehouse - has profile photo


var Person = (function (){
	function Person(){
		this.name = '';
		this.username = '';
		this.badges = [];
		this.gravatar = '';

	}

	Person.prototype.numBadges = function(){
		return this.badges.length;
	}

  Person.prototype.toString = function() {
    // var output = this.name + " badges: " + this.badges;
    var output = " " + this.name + " ";
    return output;
  }

	return Person;

})();



if (typeof module !== "undefined") {
  module.exports = Person;
}