// main.js
(function() {
  var usernames = ["patharryux", "jasonsiren", "erikphansen"];
  // var usernames = ["patharryux", "jasonsiren", "erikphansen", "mitchelllillie", "jeffdunn", "donguyen", "mkelley2", "josephfraley2", "kathleenkent", "adamtaitano"];
  var people = [];
  var badges = [];
  var completed = 0;

  function getAndProcessData() {
    // make get JSON calls for each username
    // parse each JSON object and create a ner Person object for each
    // and make a new Badge or update the existing Badge
    usernames.forEach(function (e, i) {
      var url = "https://teamtreehouse.com/" + e + ".json";
      $.getJSON(url, function (data) {
        var theseBadges = data.badges;
        var thisPerson = new Person();
        thisPerson.name = data.name;
        thisPerson.username = data.profile_name;
        thisPerson.gravatar = data.gravatar_url;
        people.push(thisPerson);

        theseBadges.forEach(function (b) {
          // if this badge is already in `badges`, simply add this user to `badges.users` array
          // else, make a new Badge
          var badgeExists = false;
          var existingBadge = null;
          badges.forEach(function (badge) {
            if (badge.name === b.name) {
              badgeExists = true;
              existingBadge = badge;
            }
          });
          if (badgeExists) {
            existingBadge.owners.push(thisPerson);
            thisPerson.badges.push({badge:existingBadge,earned:b.earned_date})
          } else {
            var newBadge = new Badge();
            newBadge.owners = [thisPerson];
            newBadge.name = b.name;
            newBadge.link = b.url;
            if (b.name === "Newbie") {
              newBadge.link = "https://www.teamtreehouse.com"
            }
            newBadge.image = b.icon_url;
            badges.push(newBadge);
            thisPerson.badges.push({badge:newBadge,earned:b.earned_date})
          }
        });
        if (++completed === usernames.length) {
          console.log(people[0].badges[0]);
          // buildUI();
        }
      });
    });
  }

  function badgesOfPerson(person) {
    person.badges
  }




  $(function() {
    // start doing UI stuff
    getAndProcessData();
  })

})();