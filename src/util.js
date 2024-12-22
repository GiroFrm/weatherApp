

 export function getDayName(currDate) {
    const specificDate = new Date(currDate); 
    const dayOfWeek = specificDate.getDay();
    const daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = daysName[dayOfWeek];  
       
    return dayName
}

export  function addHoursToCurrentTime(hoursToAdd) {
    const now = new Date();
    now.setHours(now.getHours() + hoursToAdd);
    return now.getHours();
  }


export function getHourIn12HourFormat(hours) { 
    const ampm = hours >= 12 ? 'PM' : 'AM';
     hours = hours % 12; hours = hours ? hours : 12;
    // the hour '0' should be '12'
     const strTime = hours + ' ' + ampm; 
     return strTime;
     }

export function createImgElement(src, alt="", width="80", height="80") {
    const img = new Image(width, height);
       img.src = src;
       img.alt = alt;
       img.width = width;
       img.height = height;
       return img;
}

export function createElement(element, className = "", textContent = "") {
    const elem = document.createElement(element);
    if (className) elem.className = className;
    if (textContent) elem.textContent = textContent;
    return elem;
  }


export function removeChildrenContainer(childrenName) {
  const childElements = document.querySelectorAll(`.${childrenName}`);
  childElements.forEach((child) => {
    if (child.parentNode) {
      child.parentNode.removeChild(child);
    }
  });
}

export function getCurrentTime(){
    const now = new Date();
       const hours = now.getHours();
       const minutes = now.getMinutes(); 
       const currentTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
       return currentTime;
}