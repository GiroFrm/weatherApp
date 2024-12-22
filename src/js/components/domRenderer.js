import fetchingWeather from '../../api.js';
import { createElement, removeChildrenContainer, getCurrentTime}  from '../../util.js';
import {imgCondition, getDailyForecast } from './dailyForecast.js'
import { getHourlyForecast } from './hourlyForecast.js';
import { getCurrentForecast, getDescription, getInfosCurrentWeather } from './currentForecast.js';

export default async function renderDom(location="melbourne") {
       
      const data = await fetchingWeather(location);
      
        console.log(data);  
        console.log(typeof data.currentConditions.icon)

        document.querySelector('.location').innerHTML= data.address;
        document.querySelector('.current-time').innerHTML = getCurrentTime();

      const currentContainer =  document.querySelector('.current-container');  
            currentContainer.innerHTML = '';
 
      const tempContainer =  getCurrentForecast(data.currentConditions);
         currentContainer.appendChild(tempContainer);
         currentContainer.appendChild(getDescription(`${data.description}`));
         currentContainer.appendChild(getInfosCurrentWeather(data.currentConditions));

        const wrapper_body =  document.querySelector('.wrapper');
       
        removeChildrenContainer("hourly-container");

        const hourly_container = createElement('div', 'hourly-container');
           wrapper_body.appendChild(getHourlyForecast(data, hourly_container));
           wrapper_body.appendChild(getDailyForecast(data, hourly_container));  
    }

    document.querySelector('form').addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event) {
         event.preventDefault(); 
         const city = event.target.city.value;
         renderDom(city);
       
    }

   

   


   