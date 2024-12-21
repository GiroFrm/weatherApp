
import { createElement, getHourIn12HourFormat } from "../../util";


export function getHourlyForecast(data, hourly_container){
    
    const now = new Date();
    const startHour = now.getHours();

    for(let i=0; i<7; i++){
      const hourlyElement =  getHourForecastElement(data, startHour + i);
      hourly_container.appendChild(hourlyElement);
    }
      return hourly_container;
}

function getHourForecastElement(data, hour) {

    const card_hour = createElement('div', 'card-hour-temperature');
    const twoDays = [...data.days[0].hours, ...data.days[1].hours];
    const hour12H = getHourIn12HourFormat(hour); 

    const temp = getTemperature(twoDays[hour].temp);
    const hourElement = getHourElement(hour12H);

        card_hour.appendChild(temp);
        card_hour.appendChild(hourElement);

        return card_hour;
}

function getTemperature(temp){
    return createElement('p', 'card-hour-temperature__temp',`${temp}°C`);      
}

function getHourElement(hour){
   return createElement('p', 'card-hour-temperature__temp', `${hour}`);    
}

