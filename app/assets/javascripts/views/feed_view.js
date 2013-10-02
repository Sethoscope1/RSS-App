RA.Views.FeedView = Backbone.View.extend({

  template: JST['feeds/li'],

  tagName: 'li',

  render: function () {
    var renderedContent = this.template({
      feed: this.model
    });
    this.$el.html(renderedContent);

    return this;
  }

});
