if (Meteor.isClient) {
  // method 1
  var date = {
    newDate: new Date(),
  };
  Template.date.helpers(date);

  // method 2
  Template.date2.helpers({
    time: function () {
      return new Date();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
