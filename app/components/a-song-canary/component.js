import Ember from 'ember';

export default Ember.GlimmerComponent.extend({
  actions: {
    like() {
      const { onLike, id } = this.attrs;
      onLike(id);
    }
  }
});
