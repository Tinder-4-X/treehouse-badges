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

	return Person;

})();

