import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('a-song-glimmer', 'Integration | Component | a song glimmer', {
  integration: true
});

const song = {
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

  this.render(hbs`<a-song-glimmer artist={{song.artist}} title={{song.title}} album={{song.album}} year={{song.year}} genre={{song.genre}} />`);

  const $component = this.$('a-song-glimmer');

  assert.equal($component.find('.artist').text(), 'Jamie xx',
      'found artist name');
  assert.equal($component.find('.title').text(), 'Loud Places', 'found song title');
  assert.equal($component.find('.album').text(), 'In Colour', 'found album title');
  assert.equal($component.find('.year').text(), '2015', 'found release year');
  assert.equal($component.find('.genre').text(), 'Electronic', 'found genre');
});

test('it handles likes', function(assert) {
  assert.expect(1);

  // set context
  this.on('addToFavourites', function() {
    assert.ok(true, 'liking a song adds it to user favourites');
  });

  this.render(hbs`<a-song-glimmer like='addToFavourites'/>`);

  const $component = this.$('a-song-glimmer');

  $component.find('button').click();
});
