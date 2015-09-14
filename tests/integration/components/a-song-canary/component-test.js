import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('a-song-canary', 'Integration | Component | a song canary', {
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

  // set context
  this.set('song', song);

  this.render(hbs`<a-song-canary artist={{song.artist}} title={{song.title}} album={{song.album}} year={{song.year}} genre={{song.genre}} />`);

  const $component = this.$('a-song-canary');

  assert.equal($component.find('.artist').text(), 'Jamie xx',
      'found artist name');
  assert.equal($component.find('.title').text(), 'Loud Places', 'found song title');
  assert.equal($component.find('.album').text(), 'In Colour', 'found album title');
  assert.equal($component.find('.year').text(), '2015', 'found release year');
  assert.equal($component.find('.genre').text(), 'Electronic', 'found genre');
});

test('it handles likes', function(assert) {
  assert.expect(2);

  // set component context
  this.on('addToFavourites', function(id) {
    assert.ok(true, 'liking a song adds it to user favourites');
    assert.equal(id, '1', 'passed the song id');
  });

  this.render(hbs`<a-song-canary id='1' onLike={{action 'addToFavourites'}} />`);
  const $component = this.$('a-song-canary');

  $component.find('button').click();
});
