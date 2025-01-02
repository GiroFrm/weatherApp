import fetchingWeather from '../../api.js';
import { createElement, removeChildrenContainer, getCurrentTime}  from '../../util.js';
import {imgCondition, getDailyForecast } from './dailyForecast.js'
import { getHourlyForecast } from './hourlyForecast.js';
import { getCurrentForecast, getDescription, getInfosCurrentWeather } from './currentForecast.js';

export default async function renderDom(location="melbourne") {
      const wrapper_body =  document.querySelector('.wrapper');
      
       if ( !location) return 
     try{
      wrapper_body.innerHTML = `<p class="message">Loading...</p>`;

      const data = await fetchingWeather(location);
        console.log(data);
      document.querySelector('.location').innerHTML = data.resolvedAddress;
      document.querySelector('.current-time').innerHTML = data.currentConditions.datetime;
     
      wrapper_body.innerHTML = '';

      const currentContainer =  createElement('div','current-container')
            currentContainer.innerHTML = '';
  
      const tempContainer = getCurrentForecast(data.currentConditions);
         currentContainer.appendChild(tempContainer);
         currentContainer.appendChild(getDescription(`${data.description}`));
         currentContainer.appendChild(getInfosCurrentWeather(data.currentConditions));

         wrapper_body.appendChild(currentContainer);

          removeChildrenContainer("hourly-container");

          const hourlyContainer = createElement('div', 'hourly-container');

           wrapper_body.appendChild(getDailyForecast(data, hourlyContainer));  

       }catch(error){
            showError(wrapper_body, error);
       }
      }
    
    
    function showError(wrapper_body, error) {
      wrapper_body.innerHTML = `<p class="message">Error: ${error.message} location doesn't exists</p>`;
    }
    
    document.querySelector('form').addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event) {
         event.preventDefault(); 
         const city = event.target.city.value;
         renderDom(city);
       
    }

   

   


   