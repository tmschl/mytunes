var LibraryView = Backbone.View.extend({

  tagName: "table",

  className: "tableBody",

  initialize: function(){
    this.subviews = this.collection.map(function(song){
      return new LibraryEntryView({model: song});
    });
  },

  render: function(){
    this.$el.html();

    // render all the subviews and append them to this.$el
    var that = this;
    _.each(this.subviews, function(subview){
      that.$el.append(subview.render());
    })

    return this.$el;
  }

});