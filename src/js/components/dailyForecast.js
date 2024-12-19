//build daily component weather

import { createElement, createImgElement, getDayName } from "../../util";
import {getConditionImg } from "./conditionImgs"

export function getDailyForecast(data) {
   
    const hourly_container = createElement('div', 'hourly-container');

    for (let i = 0; i < 7; i++) {
        const dailyForecast = getForecastElement(data.days[i]);
        hourly_container.appendChild(dailyForecast);
    }
    return hourly_container;
}

//build componet card-week-forecast
function getForecastElement(data) {
    const card_week_forecast = createElement('div', 'card-week-forecast');
    const weekDay = getWeekDay(data.datetime);
    const imgCondition = getConditionImg(data.conditions);
    const temp_max = getMaxTemperature(data.tempmax);
    const temp_min = getMinTemperature(data.tempmin);
    card_week_forecast.appendChild(weekDay);
    card_week_forecast.appendChild(imgCondition);
    card_week_forecast.appendChild(temp_max);
    card_week_forecast.appendChild(temp_min);

    return card_week_forecast;
}


function getWeekDay(datetime) {
    const weekDay = createElement('p', 'card-week-forecast__day',);
    const currDate = datetime;
    const dayName = getDayName(currDate);
        weekDay.innerHTML = dayName;
        return weekDay;
}

function getMaxTemperature(tempmax) {
    const temps_max =  createElement('p','.card-week-forecast__temp-max');
       temps_max.innerHTML = tempmax;
    return temps_max;
}
function getMinTemperature(tempmin) {
     const temps_min =  createElement('p','.card-week-forecast__temp-min');
       temps_min.innerHTML = tempmin;
        return temps_min;
}

export function imgCondition(){
  return getConditionImg('snow');
} 