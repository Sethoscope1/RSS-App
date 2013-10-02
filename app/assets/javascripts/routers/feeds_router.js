RA.Routers.FeedsRouter = Backbone.Router.extend({
  initialize: function ($rootEl, feeds, entries) {
    this.$rootEl = $rootEl;
    this.feeds = feeds;
    this.entries = entries;
  },

  routes: {
    "": "index",
    "feeds/new": "new",
    "feeds/:id": "show",
    "feeds/:id/edit": "edit"
  },

  index: function () {
    var that = this;

    that.feeds.fetch({
      success: function () {
        var indexView = new RA.Views.FeedsIndexView({
          collection: that.feeds
        });
          console.log("stuff2")
        that.$rootEl.html(indexView.render().$el);
      }
    })
  },

  show: function (id) {
    var that = this;

    var feed = that.feeds.get(id);
    if (!feed) {
      feed = new RA.Models.Feed({id: id});
      feed.collection = that.feeds;
      feed.fetch({
        success: function () {
          that.feeds.add(feed);
        }
      });
    }

    console.log(id)
    var entries = that.entries;
    // that.entries.select(function (entry) {
    //   console.log(entry.get("feed_id"));
    //   return entry.get("feed_id") === id;
    // })
    //
    //
    //
    //   console.log(entries);

    var feedView = new RA.Views.FeedShowView({model: feed, collection: entries});
    that.$rootEl.html(feedView.render().$el);
  }


});