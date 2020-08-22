var url = 'http://api.openweathermap.org/data/2.5/weather?q=Ansan-si&appid=yourAPI';

$('#weather_info .load_img').show();

$.getJSON(url, function(data){
  var sys = data.sys;
  var city = data.name;
  var weather = data.weather;
  var main = data.main;

  var wmain = weather[0].main;
  var w_id = weather[0].id;
  var icon = weather[0].icon;
  var country = sys.country;
  var temp = main.temp;
  var temp_min = main.temp_min;
  var temp_max = main.temp_max;

  var icon_url = 'http://openweathermap.org/img/w/' + icon;

  $('#weather_info > .city').html(city + "/" + country);
  $('#weather_info .icon').html("<img src='" + icon_url + ".png'>");
  $('#weather_info .w_id').html(wmain);
  $('#weather_info .temp_min').html(parseInt(temp_min-273.15) + '&deg;' + ' min');
  $('#weather_info .temp_max').html(parseInt(temp_max-273.15) + '&deg;' + ' min');
  $('#weather_info .temp').html(parseInt(temp-273.15) + '&deg;');
  $('#weather_info .load_img').hide();
})
.fail(function(){
  alert("loding error");
});