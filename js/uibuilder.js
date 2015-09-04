// uibuilder.js

var UiBuilder = (function() {
    console.log("Built ---- UiBuilder Object.");
    function UiBuilder(controller) {
        this.controller = controller;
    };
    UiBuilder.prototype.testMethod = function() {
        console.log("Run ---- UiBuilder.");
        console.log(this.controller.people);
    };
    UiBuilder.prototype.buildUi = function() {
        console.log("\n" + "\n" + "\n");
        console.log("Running ---- buildUi");
        console.log("\n" + "\n" + "\n");
        console.log(this.controller.people);

        //Define 12-column grid structure

        //Build cards
        this.controller.people.forEach( function( e , i ) {
            console.log( "Building ---- card " + ( i + 1 ) + " ---- " + e.name +".");
            //Build
            var $card = $( '<div>' , { id: "user_" + e.username , class: "card" });
            var $card_header = $( '<div>', { class: "card_header" });
            var $badge_count = $( '<h5>' , { id: e.username + "_badge_count" , class: "badge_count" });
            var $badge_gallery = $( '<div>', { id: e.username + "_gallery" , class: "badge_gallery" });
            var $badge_recommendations = $( { id: e.username + "_recommendations" , class: "badge_recommendation" });
            var $name = $( '<h2>' , { class: "user_name_title" } );
            var $user_img = $( '<img>' , { src: e.gravatar , id: "user_img_" + e.username , class: "user_img" });

            e.badges.forEach(function( e , i ) {
                var $small_badge = $( '<img>' , { src: e.image , id: "user_bage_" + e.name , class: "badge_gallery_img" });
                $user_img.appendTo( $badge_gallery );
            });

            $name.text(e.name);
            $badge_count.text("Bade Count: " + e.badges.length);

            $user_img.appendTo( $card_header );
            $name.appendTo( $card_header );
            $badge_count.appendTo( $card_header );
            $card_header.appendTo( $card );
            $badge_count.appendTo( $card );
            $card.appendTo( 'body' );

            console.log(e);
            console.log( "Built ---- card " + ( i + 1 ) + " ---- " + e.name +".");
            console.log("\n" + "\n" + "\n");
    });
    console.log("\n" + "\n" + "\n");
    console.log("Done ---- buildUi");
    console.log("\n" + "\n" + "\n");
    };
    return UiBuilder;
})();
