// badge.js

if (typeof require !== "undefined") {
	require("./person.js");
}

var Badge = (function() {

	function Badge() {
		this.owners = [];
		this.name = "";
		this.image = "";
		this.link = "";
	}

	Badge.prototype.toString = function() {
		var output = "Badge: " + this.name;
		return output;
	}

	return Badge;

})();

if (typeof module !== "undefined") {
	module.exports = Badge;
}
