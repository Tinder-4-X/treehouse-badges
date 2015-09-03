$(function() {
  // start doing UI stuff
  var controller = new Controller();
  var uibuilder = null;
  controller.completedCallback = function (controller) {
    // uibuilder = new UiBuilder(controller);
    console.log(controller.people);
  }
  controller.getAndProcessData();
})