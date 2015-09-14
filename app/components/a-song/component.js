import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    like() {
      this.sendAction('like');
      console.log('liked this song');
    }
  }
});
