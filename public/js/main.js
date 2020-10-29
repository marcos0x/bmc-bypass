$(document).ready(function () {
  $('#input_date').val(new Date().toISOString().split('T')[0]);
  $('#input_date_icon').on('click',function(){$('.datepicker').datepicker('show');});
  $('.datepicker').datepicker({format:'yyyy-mm-dd',startDate:0,todayBtn:"linked",language:"es"});
  $('#form').submit(function(){
    var data = {
      url: $('#input_url').val(),
      date: $('#input_date').val(),
      cuils: $('#input_cuils').val().split('\n').join(',').replace(/\s/g, ''),
      emails: $('#input_emails').val().split('\n').join(',').replace(/\s/g, ''),
    }

    $('#links .alert').hide();
    $('#links .loading').addClass('d-flex').removeClass('d-none');
    $('#links .list').html('');

    $.ajax({
      url: '/api/links',
      type: 'post',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function(response) {
        var links = response.links;
        $('#links .loading').removeClass('d-flex').addClass('d-none');
        $('#links .alert-success').show();
        $('#links .list').html(links.map(function(link) { return '<div class="link"><a href="'+link+'" target="_blank">'+link+'</a></div>' }).join(''));
      },
      error: function() {
        $('#links .loading').removeClass('d-flex').addClass('d-none');
        $('#links .alert-danger').show();
      }
    })
    return false;
  })
});
