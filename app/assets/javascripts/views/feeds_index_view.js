RA.Views.FeedsIndexView = Backbone.View.extend({

  template: JST['feeds/index'],

  render: function () {
    var renderedContent = this.template({
      feeds: this.collection

      //feeds.each do
    })
    this.$el.html(renderedContent);

    return this;
  }

});
