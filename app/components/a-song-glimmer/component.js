import Ember from 'ember';

export default Ember.GlimmerComponent.extend({
  actions: {
    like() {
      this.sendAction('like');
    }
  }
});
