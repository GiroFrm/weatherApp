

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

  