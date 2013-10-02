RA.Routers.FeedsRouter = Backbone.Router.extend({
  initialize: function ($rootEl, feeds) {
    this.$rootEl = $rootEl;
    this.feeds = feeds
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
  }

});