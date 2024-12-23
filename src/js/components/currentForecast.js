import { createElement, createImgElement } from "../../util";
import { getConditionImg } from "./conditionImgs";

export function getCurrentForecast(data){
    const conditions = data.conditions.split(",")[0]
    const tempContainer = createElement('div',"temp-container");
    const imgConditions = getConditionImg(`${conditions}`);
    const temperature = createElement('p', "temp-container__temp", `${data.temp}`);
    const conditionsWeather = createElement('p', "temp_container__conditions",`${data.conditions}`);

       tempContainer.appendChild(imgConditions);
       tempContainer.appendChild(temperature);
       tempContainer.appendChild(conditionsWeather);

    return tempContainer
}

export function getDescription(description){
    return createElement('p', " description ", `${description}`);
}

export function getInfosCurrentWeather(data) {
   const containerInfos = createElement('div', "container-infos");
   const feelsLike = getElementInfo("container-infos__feels","feels",data.feelslike);
   const precipProb = getElementInfo("container-infos__precip", "precipitation" ,data.precipprob);
   const wingSpeed = getElementInfo("container-infos__wind", 'wind' ,data.windspeed);
   const humidity = getElementInfo("container-infos__hum", 'humidity' ,data.humidity);
   const visibility = getElementInfo("container-infos__vis",'visibility' ,data.visibility);
   const sunrise = getElementInfo("container-infos__sun",'sunrise' ,data.sunrise);
   const sunset = getElementInfo("container-infos__sunset", 'sunset' , data.sunset);

   containerInfos.append(feelsLike, precipProb, wingSpeed, humidity, visibility, sunrise, sunset );

   return containerInfos;

}

function getElementInfo(className,name ,data,){
    const span = createElement('span');
    const infoElement = createElement('p',className, name);
        span.innerHTML = `${data}`  
        infoElement.appendChild(span);
        return infoElement;
}

