import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    like() {
      // 1.x
      // this.sendAction('onLike');

      // 2.x closure actions
      const { onLike, id } = this.attrs;
      onLike(id);
    }
  }
});
