import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions:{
    updatePostFormShow(){
      this.set('updatePostForm', true);
    },
    updatePost(post) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        text: this.get('text'),
        image: this.get('image')
      };
      this.set('updatePostForm', false);
      this.sendAction('updatePost', post, params);
    }
  }
});
