var PlaylistEntryView = Backbone.View.extend({


  tagName: "tr",

  template: _.template("<td><%= title %></td>"),

  events: {
    'click': 'removeSong'
  },

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  removeSong: function() {
    var oldModel = this.model;
    this.model = undefined;
    oldModel.unset("queuedAt");
  }

});