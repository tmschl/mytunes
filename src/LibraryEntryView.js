var LibraryEntryView = Backbone.View.extend({

  tagName: "tr",

  className: 'tableRow',

  events: {
    "click": "addToQueue"
  },

  // templates are a nicer way to put js data into html strings
  template: _.template("<td><%= title %><div class='controls'> <button onclick='document.getElementById('audio').pause()' class='pause'>Pause</button></div> <button onclick='document.getElementById('audio').play()' class='play'>Play</button></div></td>"),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },

  // event listener
  addToQueue: function(){
    this.model.set("queuedAt", new Date());
    this.model.attributes.queuedAt = new Date();
  }

});