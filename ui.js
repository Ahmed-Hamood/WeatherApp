class UI {
  constructor(){
     this.location = document.getElementById('location');
     this.desc = document.getElementById('desc');
     this.temp = document.getElementById('temp');
     this.icon = document.getElementById('icon');

     this.Humidity = document.getElementById('Humidity');
     this.mintemp = document.getElementById('mintemp');
     this.maxtempC = document.getElementById('maxtempC');
     this.windspeedKmph = document.getElementById('windspeedKmph');


  }

  showWeather(info){

      this.location.textContent = `${info.country.country[0].value} , ${info.country.areaName[0].value} `  ;



      this.desc.textContent = info.weather.data.weather[0].hourly[0].bottom[0].weatherDesc[0].value;
      this.temp.textContent = `${info.weather.data.weather[0].hourly[0].bottom[0].tempF} F (${info.weather.data.weather[0].hourly[0].bottom[0].tempC} C)`;

      // this.icon.setAttribute('src' , info.weather.data.weather[0].hourly[0].bottom[0].weatherIconUrl[0].value)  ;

      this.Humidity.textContent = `Relative Humidity : ${info.weather.data.weather[0].hourly[0].humidity}%`; 
      this.mintemp.textContent = `Min Temp :  ${info.weather.data.weather[0].bottom[0].mintempF} F ( ${info.weather.data.weather[0].bottom[0].mintempC} C)`; 
      this.maxtempC.textContent =  `Max Temp : ${info.weather.data.weather[0].bottom[0].maxtempF} F (${info.weather.data.weather[0].bottom[0].maxtempC} C)`; 
      this.windspeedKmph.textContent = `Wind From the SSE at ${info.weather.data.weather[0].hourly[0].bottom[0].windspeedKmph} MPH`; 

  }

  showModal(){
    document.querySelector('.modal').style.display = 'block';
     document.getElementById('container').style.opacity = '0.2';
     document.querySelector('html').style.backgroundColor = '#080808f3';
     document.getElementById('change').style.display = 'none';
   }

   hideAndCloseModal(){
    document.querySelector('.modal').style.display = 'none';
   document.getElementById('container').style.opacity = '1';
   document.querySelector('html').style.backgroundColor = '#2d7d9a';
   document.getElementById('change').style.display = 'block';
 }

 emptyAllFields(){
 document.getElementById('country').value = '';
        document.getElementById('city').value = '';
 }

}