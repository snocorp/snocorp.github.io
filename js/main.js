
jQuery(document).ready(function($) {
  var sections = ['life', 'code', 'work'];
  for (var i in sections) {
    $('#'+sections[i]+' h2, #'+sections[i]+'Link').click(function(section) { return function(event) {
      $('section.active').removeClass('active');
      $('#'+section).addClass('active');

      console.log(section);
      event.preventDefault();
    };}(sections[i]));
  }
});