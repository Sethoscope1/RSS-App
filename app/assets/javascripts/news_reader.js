RA = window.RA

window.RA = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function ($rootEl, feeds) {

    new RA.Routers.FeedsRouter($rootEl, feeds);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  var feeds = new RA.Collections.Feeds();
  feeds.fetch({ success: function () {
      RA.initialize($('#content'), feeds);
    }
  })
});
