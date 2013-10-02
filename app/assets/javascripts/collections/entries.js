RA.Collections.Entries = Backbone.Collection.extend ({

  model: RA.Models.Entry,
  // FIX URLS
  url: '/feeds/:feed_id/entries'


});