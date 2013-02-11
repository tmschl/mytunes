var PlaylistView = Backbone.View.extend({
  queuedSongs: [],

  className: 'PlaylistView',

  initialize: function(){
    this.collection.on('change:queuedAt', this.render, this);
  },

  
  render: function (){
    var self = this;
    this.$el.empty();
    this.queuedSongs = this.collection.queued();
    _.each(this.queuedSongs, function (queuedSong) {
      var queuedSongSubview = new PlaylistEntryView({model: queuedSong});
      self.$el.append(queuedSongSubview.render());
    });
    return this.$el;
  }

});