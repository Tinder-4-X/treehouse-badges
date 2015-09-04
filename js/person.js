if (typeof require !== "undefined") {
	require("./badge.js");
}

var Person = (function() {
	function Person() {
		this.name = '';
		this.username = '';
		this.badges = [];
		this.gravatar = '';

	}

	Person.prototype.numBadges = function() {
		return this.badges.length;
	}

	Person.prototype.toString = function() {
		// var output = this.name + " badges: " + this.badges;
		var output = " " + this.name + " ";
		return output;
	}

	Person.prototype.getBadgeObjects = function() {
		return this.badges.map(function(e) {
			return e.badge;
		})
	}

	return Person;

})();


if (typeof module !== "undefined") {
	module.exports = Person;
}
