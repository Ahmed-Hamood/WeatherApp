class Weather {
  constructor(city, state) {
    this.apiKey = '4bf79f6d6f4047739be190437192311';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.worldweatheronline.com/premium/v1/search.ashx?q=${this.city},${this.state}&num_of_results=3&format=json&key=${this.apiKey}`);
      const responseData = await response.json();
      //  console.log(responseData);
      const responselatitude = await responseData.search_api.result[0].latitude;
      const responselongitude = await responseData.search_api.result[0].longitude;
   

    const weather = await fetch(`http://api.worldweatheronline.com/premium/v1/ski.ashx?key=${this.apiKey}&q=${responselatitude},${responselongitude}&format=json`);
    // http://api.worldweatheronline.com/premium/v1/ski.ashx?key=4bf79f6d6f4047739be190437192311&q=51.517,-0.106&format=json
    const weatherData = await weather.json();
      
    // console.log(weatherData.data.weather[0].hourly[0].bottom[0].weatherDesc[0].value);

    return {
      country : responseData.search_api.result[0] ,
      weather : weatherData
    } 
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}