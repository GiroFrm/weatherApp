
import sun from "../../images/sun.svg";
import cloudy from "../../images/cloudy.svg"
import partiallyCloudy from "../../images/partiallyCloudy.svg";
import rain from "../../images/rain.svg";
import snow from "../../images/snow.svg";
import { createImgElement } from "../../util";



export function getConditionImg(condition, width, height){
    switch(condition.toLowerCase()){
        case'rainy':
           return  createImgElement(rain, "Rainy", width, height);

        case 'clear':
           return createImgElement(sun, "Clear", width, height);

        case 'overcast':
           return createImgElement(cloudy, "Overcast", width, height);
        
        case 'snow':
           return createImgElement(snow, "Snow", width, height);

        case "partially cloudy":
           default:
              return createImgElement(partiallyCloudy, "Partially Cloudy", width, height);
        
    } 
     
}
