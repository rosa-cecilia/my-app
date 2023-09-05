
export const dateTimes = {};
export const fetchAPI = (date) => {

    // You can use the date parameter to generate available times
    const availableTimes = generateAvailableTimes(date);
    if (!dateTimes[date]) {
        dateTimes[date] = availableTimes;
    }
    return dateTimes[date] || [];
};

// Function to generate available times based on the provided date
const generateAvailableTimes = () => {
    // Replace this with your logic to generate times based on the date
    // For simplicity, we'll generate a list of times at hourly intervals
    const times = [];
    const startTime = 8; // Starting time in 24-hour format (e.g., 8 AM)
    const endTime = 17; // Ending time in 24-hour format (e.g., 5 PM)

    for (let hour = startTime; hour <= endTime; hour++) {
        // Format the time as HH:00 AM/PM
        const time = formatTime(hour);
        times.push(time);
    }

    return times;
};

// Function to format a 24-hour time as HH:00 AM/PM
const formatTime = (hour) => {
    const isAM = hour < 12;
    const period = isAM ? 'AM' : 'PM';
    const formattedHour = hour % 12 || 12; // Convert 0 to 12 for 12-hour time
    return `${formattedHour}:00 ${period}`;
};



export const submitAPI = (formData) => {
    // Simulate a successful form submission
    const { date, time } = formData;

    // Check if the date exists in the object
    if (dateTimes[date]) {
        // Use filter to create a new array of times excluding the time to delete
        dateTimes[date] = dateTimes[date].filter((t) => t !== time);
    }

    console.log(`Submit ${date} and time: ${time}`);
    return true;
};

// api.js

export const setDateTimes = (date, times) => {
    dateTimes[date] = times;
};

// api.js



// Rest of your code
