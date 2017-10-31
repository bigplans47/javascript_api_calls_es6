$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val('');
    console.log(5, city);
    let promise = new Promise(function(resolve, reject){
      console.log(7);
      let request = new XMLHttpRequest();
      console.log(9, request);
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=adfda684d78d4876a3e77e8dbfb6c5b9`
      console.log(11, url);
      request.onload = function() {
        console.log(13, request);
        if (this.status === 200) {
          console.log(15);
          resolve(request.response);
          console.log(17);
        } else {
          console.log(19);
          reject(Error(request.statusText));
          console.log(21);
        }
        console.log(23,promise)
        // }
      }
      console.log(25);
      request.open('GET', url, true);
      console.log(27);
      request.send();
      console.log(29);
    });

    promise.then(function(response) {
      body = JSON.parse(response);
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.errors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
