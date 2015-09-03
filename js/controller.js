// controller.js

var Controller = (function() {

	function Controller() {
		this.usernames = ["patharryux", "jasonsiren", "erikphansen"];
		// var usernames = ["patharryux", "jasonsiren", "erikphansen", "mitchelllillie", "jeffdunn", "donguyen", "mkelley2", "josephfraley2", "kathleenkent", "adamtaitano"];
		this.people = [];
		this.badges = [];
		this.completed = 0;
	}

	function makeCallback(scope) {
		function jsonCallback(data) {
			var theseBadges = data.badges;
			var thisPerson = new Person();
			thisPerson.name = data.name;
			thisPerson.username = data.profile_name;
			thisPerson.gravatar = data.gravatar_url;
			console.log(scope);
			scope.people.push(thisPerson);

			theseBadges.forEach(function(b) {
				// if this badge is already in `badges`, simply add this user to `badges.users` array
				// else, make a new Badge
				var badgeExists = false;
				var existingBadge = null;
				scope.badges.forEach(function(badge) {
					if (badge.name === b.name) {
						badgeExists = true;
						existingBadge = badge;
					}
				});
				if (badgeExists) {
					existingBadge.owners.push(thisPerson);
					thisPerson.badges.push({
						badge: existingBadge,
						earned: b.earned_date
					})
				} else {
					var newBadge = new Badge();
					newBadge.owners = [thisPerson];
					newBadge.name = b.name;
					newBadge.link = b.url;
					if (b.name === "Newbie") {
						newBadge.link = "https://www.teamtreehouse.com"
					}
					newBadge.image = b.icon_url;
					scope.badges.push(newBadge);
					thisPerson.badges.push({
						badge: newBadge,
						earned: b.earned_date
					})
				}
			});
			if (scope.people.length === scope.usernames.length) {
				console.log(scope.people[0].badges[0]);
				// uibuilder.build();
			}
		}
		return jsonCallback;
	}

	Controller.prototype.getAndProcessData = function() {
		// make get JSON calls for each username
		// parse each JSON object and create a ner Person object for each
		// and make a new Badge or update the existing Badge
		this.usernames.forEach(function(e, i) {
			var url = "https://teamtreehouse.com/" + e + ".json";
			$.getJSON(url, makeCallback(this));
		}, this)
	}


	Controller.prototype.badgesOfPerson = function(person) {
		// return person.badges
	}

	return Controller;

})();
