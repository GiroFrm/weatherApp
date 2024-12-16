

const API_KEY= 'A4TXWB2HDKTVSSGT775CEVL26'
const unit ='uk'

export default async function fetchingWeather(location) {
  const API_CITY = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=${API_KEY}&contentType=json`
    try{
    const response = await  fetch(API_CITY, {mode: 'cors'});
    const data = await response.json();
    return data;
    }catch(Error){
        console.log(Error);
    }    
}


