$(document).ready(function(e){
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
        div.append('<button type="button" id="pro"class="btn btn-primary"data-toggle="modal"data-target="#exampleModal"data-name="'+random.user.name.first+'"data-phone="'+random.user.phone+'">info of '+random.user.name.first+'</button>');
        li.append(div);
        $('#username').append(li);
      });
    }
  });
  $('body').on('click', '.btn', function(event) {
    $(".modal-title").html("Name: "+ $(this).data("name"));
    $(".modal-body").html("Phone: "+ $(this).data("phone"));
  });
});



