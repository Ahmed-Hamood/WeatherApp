const ui = new UI() ;

document.getElementById('change').addEventListener('click' , ui.showModal);
 
document.getElementById('close').addEventListener('click' , ui.hideAndCloseModal);
 

const storage = new Storage();



const thelocation = storage.getLocationData();

const weather = new Weather(thelocation.country,thelocation.city);



document.addEventListener('DOMContentLoaded', getWeather);
document.getElementById('submit').addEventListener('click' , changeLocation);



function getWeather(){

    weather.getWeather()
    .then( result => ui.showWeather(result))
    .catch(err=>console.log('An Error'));

}


function changeLocation(){
     let country = document.getElementById('country').value;
     let city = document.getElementById('city').value;
 
     if(country !== '' && city !== ''){
        weather.changeLocation(country,city);

        storage.setLocation(country,city);
         getWeather();

         ui.hideAndCloseModal();

         ui.emptyAllFields();
     }
     else{
       alert('Empty Location');
     }
    
}