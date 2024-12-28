//build daily component weather

import { createElement, getDayName } from "../../util";
import { getConditionImg } from "./conditionImgs"

export function getDailyForecast(data, hourly_container) {

  for (let i = 0; i < 7; i++) {
    const dailyForecast = getForecastElement(data.days[i]);
    hourly_container.appendChild(dailyForecast);
  }
  return hourly_container;
}

//build componet card-week-forecast
function getForecastElement(data) {
  const conditions = data.conditions.split(",")[0];
  const card_week_forecast = createElement('div', 'card-week-forecast');
  const weekDay = getWeekDay(data.datetime);
  const imgCondition = getConditionImg(conditions, '40', '40');
  const temp_max = getTemperatureElement(data.tempmax, 'max');
  const temp_min = getTemperatureElement(data.tempmin, 'min');

  card_week_forecast.appendChild(weekDay);
  card_week_forecast.appendChild(imgCondition);
  card_week_forecast.appendChild(temp_max);
  card_week_forecast.appendChild(temp_min);

  return card_week_forecast;
}

function getWeekDay(datetime) {
  const dayName = getDayName(datetime);
  return createElement('p', 'card-week-forecast__day', `${dayName}`);
}

function getTemperatureElement(temp, type) {
  const className =
    type === "max"
      ? "card-week-forecast__temp-max"
      : "card-week-forecast__temp-min";
  return createElement("p", className, `${temp}°C`);
}

export function imgCondition() {
  return getConditionImg('snow');
} 