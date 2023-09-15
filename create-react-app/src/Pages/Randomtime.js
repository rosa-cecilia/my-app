import React, { useState, useEffect } from 'react';

function RandomTimeDisplay() {
    const [randomTime, setRandomTime] = useState('');

    useEffect(() => {
        // Generate random hours (between 0 and 23)
        const hours = Math.floor(Math.random() * 24);

        // Generate random minutes (between 0 and 59)
        const minutes = Math.floor(Math.random() * 60);

        // Generate random seconds (between 0 and 59)
        const seconds = Math.floor(Math.random() * 60);

        // Format the time components as two-digit strings
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');

        // Create the random time string in the format HH:MM:SS
        const randomTimeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

        // Update the state with the generated random time
        setRandomTime(randomTimeString);
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <> {randomTime}</>
    );
}

export default RandomTimeDisplay;
