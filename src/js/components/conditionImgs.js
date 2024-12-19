
import sun from "../../images/sun.svg";
import cloudy from "../../images/cloudy.svg"
import partiallyCloudy from "../../images/partiallyCloudy.svg";
import rain from "../../images/rain.svg";
import snow from "../../images/snow.svg";
import { createImgElement } from "../../util";



export function getConditionImg(condition){
    switch(condition.toLowerCase()){
        case'rainy':
           return  createImgElement(rain, "Rainy");

        case 'clear':
           return createImgElement(sun, "Clear");

        case 'overcast':
           return createImgElement(cloudy, "Overcast");
        
        case 'snow':
           return createImgElement(snow, "Snow");

        case "partially cloudy":
           default:
              return createImgElement(partiallyCloudy, "Partially Cloudy");
        
    } 
     
}
