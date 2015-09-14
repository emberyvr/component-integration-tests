import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const song = {
      artist: 'Jamie xx',
      title: 'Loud Places',
      album: 'In Colour',
      duration: '4:43',
      year: '2015',
      genre: 'Electronic'
    };

    return song;
  }
});
