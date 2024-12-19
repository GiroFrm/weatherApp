import fetchingWeather from '../../api.js';
import {getDayName, addHoursToCurrentTime, getHourIn12HourFormat, createImgElement}  from '../../util.js';
import {imgCondition, getDailyForecast } from './dailyForecast.js'

export default async function renderDom(location="melbourne") {
       
      const data = await fetchingWeather(location);
      
        console.log(data);  
        console.log(typeof data.currentConditions.icon)
       document.querySelector('.location').innerHTML= data.address
       document.querySelector('.temp-container__temp').innerHTML = data.currentConditions.temp
       document.querySelector('.temp-container__conditions').innerHTML = data.currentConditions.conditions;
       document.querySelector('.description').innerHTML = data.description;
       
       document.querySelector('.container-infos__feels span').innerHTML = data.currentConditions.feelslike;
       document.querySelector('.container-infos__precip span').innerHTML = data.currentConditions.precipprob;
       document.querySelector('.container-infos__wind span').innerHTML = data.currentConditions.windspeed;
       document.querySelector('.container-infos__hum span').innerHTML = data.currentConditions.humidity;
       document.querySelector('.container-infos__vis span').innerHTML = data.currentConditions.visibility;
       document.querySelector('.container-infos__sun span').innerHTML = data.currentConditions.sunrise;
       document.querySelector('.container-infos__sunset span').innerHTML = data.currentConditions.sunset;
       

       const wrapper_body =  document.querySelector('.wrapper');

       wrapper_body.appendChild(getDailyForecast(data));
     
     const temp_container =   document.querySelector('.temp-container');
      const img_weather = imgCondition();
        temp_container.insertBefore(img_weather, temp_container.firstChild);

       const daysWeek = document.querySelectorAll('.card-week-forecast__day');
          
     const now = new Date(); 
     const hour = now.getHours();
    //    hourly teperature
     const hours = document.querySelectorAll('.card-hour-temperature__time');
     const temperature_hourly =  document.querySelectorAll('.card-hour-temperature__temp'); 

     const twoDays = [...data.days[0].hours, ...data.days[1].hours];
    
     for(let i=0; i<temperature_hourly.length; i++){
      const now1 = addHoursToCurrentTime(i);

      hours[i].innerHTML = getHourIn12HourFormat(now1);
      temperature_hourly[i].innerHTML = twoDays[hour + i].temp;
     }
         for(let i=0; i<temperature_hourly.length; i++){
                const currDate = data.days[i].datetime;
                const dayName = getDayName(currDate);
                    daysWeek[i].innerHTML = dayName;
         }

    
    renderMinMaxTemperature(data);
    }

    function renderMinMaxTemperature(data) {
        const temps_max =  document.querySelectorAll('.card-week-forecast__temp-max');
        const temps_min =  document.querySelectorAll('.card-week-forecast__temp-min');
        for(let i = 0; i<temps_min.length; i++) {
           temps_min[i].innerHTML = data.days[i].tempmin;
          // temps_max[i].innerHTML = data.days[i].tempmax;
        }
    }


    document.querySelector('form').addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event) {
         event.preventDefault(); 
         const city = event.target.city.value;
         renderDom(city);
       
    }

   

   


   