//$(document).ready(function(){
$(document).on('turbolinks:load', function(){
  $('#friend-lookup-form').on('ajax:complete', function(event, data, status){
    console.log(status);
    $('#results').html(data.responseText);
  })
})