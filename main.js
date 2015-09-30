$.ajax({
  url: 'http://api.randomuser.me/?results=10',
  dataType: 'json',
  success: function(data){
    $.each(data.results, function(index, random){
      var li = $('<li>');
      li.append('<img src="'+random.user.picture.medium+'">');
      li.append('<p>'+'name: '+random.user.name.first+'</p>');
      li.append('<p>'+'location: '+random.user.location.city+'</p>')
      var div = $('<div>');
      div.append('<button type="button"class="btn btn-primary btn-lg"data-toggle="modal"data-target="#myModal">modal</button>');
      li.append(div);
      $('#username').append(li);
    });
  }
});



