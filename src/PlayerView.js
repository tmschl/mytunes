var PlayerView = Backbone.View.extend({

  initialize: function(){
    // set up an event listener on the songs collection
    this.collection.bind("change", this.handleQueueChange.bind(this));
  },

  // templates are a nicer way to put js data into html strings
  template: _.template('<audio src="<%= url %>" controls autoplay></audio>'),


  render: function(){
    if(this.model){
      this.$el.html(this.template(this.model.attributes));
    }

    $('audio').on("ended", this.handleQueueEnd.bind(this));

    return this.$el;
  },

  handleQueueChange: function(){
    if(!this.model || !this.model.attributes.queuedAt){
      this.model = this.collection.queued()[0];
      this.render();
    }

  },

  handleQueueEnd: function() {
    var oldModel = this.model;
    this.model = undefined;
    oldModel.set("queuedAt", undefined);
  }


});