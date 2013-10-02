RA = window.RA

window.RA = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function ($rootEl, feeds, entries) {

    new RA.Routers.FeedsRouter($rootEl, feeds, entries);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  var feeds   = new RA.Collections.Feeds();
  var entries = new RA.Collections.Entries();

  console.log(entries)
    feeds.fetch({ success: function () {
      entries.fetch({ success: function (){
        console.log('fetching');
        console.log(feeds);
        console.log(entries);
        RA.initialize($('#content'), feeds, entries);
      }});
    }
  })
});
