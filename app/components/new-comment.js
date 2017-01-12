import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
     var params = {
       username: this.get('username'),
       text: this.get('text'),
       post: this.get('post')
     };
     this.set('addNewComment', false);
     this.sendAction('saveComment', params);
   }
  }
});
