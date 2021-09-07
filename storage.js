class Storage{
  constructor(){
    this.country;
    this.city;
  }

  getLocationData(){
    if(localStorage.getItem('country') === null){
      this.country = 'unitedkingdom';
    }else{
      this.country = localStorage.getItem('country');
    }
    if(localStorage.getItem('city') === null){
      this.city = 'London'
    }else{
      this.city = localStorage.getItem('city');
    }


    return {
      country : this.country,
      city : this.city
    }
  }


  setLocation(country , city){
    localStorage.setItem('country' , country);
    localStorage.setItem('city' , city);
  }
}