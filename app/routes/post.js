import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions:{
    saveComment(params) {
  var newComment = this.store.createRecord('comment', params);
  var post = params.post;
  post.get('comments').addObject(newComment);
  newComment.save().then(function() {
    return post.save();
  });
  this.transitionTo('post', post);
},
    updatePost(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('post');
    },
    deletePost(post) {
      var comment_deletions = post.get('comments').map(function(comment) {
        return comment.destroyRecord();
      });
      Ember.RSVP.all(comment_deletions).then(function() {
        return post.destroyRecord();
      });
      this.transitionTo('index');
    },
  destroyComment(comment) {
    comment.destroyRecord();
    this.transitionTo('post');   }
}
});
