// Given a time in minutes, this function splits the time into hours and minutes

function TimeConvert(num) { 
    const hours = Math.floor(num / 60);
    const mins = num % 60;

    return `${hours}:${mins}`; 
}

TimeConvert(126); // returns "2:6"