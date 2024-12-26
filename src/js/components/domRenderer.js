import fetchingWeather from '../../api.js';
import { createElement, removeChildrenContainer, getCurrentTime}  from '../../util.js';
import {imgCondition, getDailyForecast } from './dailyForecast.js'
import { getHourlyForecast } from './hourlyForecast.js';
import { getCurrentForecast, getDescription, getInfosCurrentWeather } from './currentForecast.js';

export default async function renderDom(location="melbourne") {
      const wrapper_body =  document.querySelector('.wrapper');
      

       if (location) {
          wrapper_body.innerHTML = `<p class="message">Loading...</p>`;
     
        const data = await fetchingWeather(location);
      
      wrapper_body.innerHTML = '';
      const currentContainer =  createElement('div','current-container') //document.querySelector('.current-container');  
            currentContainer.innerHTML = '';
            wrapper_body.appendChild(currentContainer);
      const tempContainer =  getCurrentForecast(data.currentConditions);
         currentContainer.appendChild(tempContainer);
         currentContainer.appendChild(getDescription(`${data.description}`));
         currentContainer.appendChild(getInfosCurrentWeather(data.currentConditions));

        removeChildrenContainer("hourly-container");

        const hourly_container = createElement('div', 'hourly-container');
           wrapper_body.appendChild(getHourlyForecast(data, hourly_container));
           wrapper_body.appendChild(getDailyForecast(data, hourly_container));  

       }
    }

   

    document.querySelector('form').addEventListener('submit', handleFormSubmit);

   
   
    function handleFormSubmit(event) {
         event.preventDefault(); 
         const city = event.target.city.value;
         renderDom(city);
       
    }

   

   


   