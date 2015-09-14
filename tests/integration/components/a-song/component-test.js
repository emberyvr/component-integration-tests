import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('a-song', 'Integration | Component | a song', {
  integration: true
});

const song = {
  id: '1',
  artist: 'Jamie xx',
  title: 'Loud Places',
  album: 'In Colour',
  year: '2015',
  genre: 'Electronic'
};

test('it displays the song details', function(assert) {
  assert.expect(5);

  // set outer context
  this.set('song', song);

  this.render(hbs`{{a-song artist=song.artist title=song.title album=song.album year=song.year genre=song.genre}}`);

  const $component = this.$('.a-song');

  assert.equal($component.find('.artist').text(), 'Jamie xx', 'found artist name');
  assert.equal($component.find('.title').text(), 'Loud Places', 'found song title');
  assert.equal($component.find('.album').text(), 'In Colour', 'found album title');
  assert.equal($component.find('.year').text(), '2015', 'found release year');
  assert.equal($component.find('.genre').text(), 'Electronic', 'found genre');
});


test('it handles likes', function(assert) {
  assert.expect(2);

  // set component context
  const songId = '1';
  this.on('addToFavourites', function(id) {
    assert.ok(true, 'liking a song adds it to user favourites');
    assert.equal(id, songId, 'passed the song id');
  });

  /**
   * Ember 2.0 replaces action bubbling with function passing
   * this.render(hbs`{{a-song onLike='addToFaves'}}`);
   *
   * (action 'addToFaves') looks for the action in contexts `action`
   * hash
   * (action addToFaves) looks for the action in the context directly
  **/


  this.render(hbs`{{a-song id='1' onLike=(action 'addToFavourites')}}`);
  const $component = this.$('.a-song');

  $component.find('button').click();
});
