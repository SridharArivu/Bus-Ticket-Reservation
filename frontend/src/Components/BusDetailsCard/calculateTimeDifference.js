import React from 'react'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const calculateTimeDifference = (departureTime, arrivalTime) => {
    const format = 'hh:mm A';

    const departure = dayjs(departureTime, format);
    const arrival = dayjs(arrivalTime, format);
  
    // Handle cases where arrival time is the next day
    if (arrival.isBefore(departure)) {
      arrival.add(1, 'day');
    }
  
    const differenceInHours = arrival.diff(departure, 'hour', true);
    return differenceInHours;
}

export default calculateTimeDifference