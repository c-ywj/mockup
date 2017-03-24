$(() => {
  var $formdata = $('.formdata form');

  $formdata.on('submit', function(ev) {
    ev.preventDefault();
    const formData = $(ev.target).serialize();
    $.ajax({
      method: 'POST',
      url: "http://localhost:1337/login",
      data: formData
    }).done(function() {
      window.location = 'http://localhost:1337/';
    });
  })
}
