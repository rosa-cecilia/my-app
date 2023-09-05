import Header from '../Header'
import Footer from '../Footer';
import Bookform from '../Book/Bookform';
import myimg3 from "../Images/restaurant.jpg"
import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from '../api';
import { useNavigate } from 'react-router-dom'
//import { fetchAPI, submitAPI } from 'api';

//function updateTime(aviableTimes, action) {
//    switch (action.type) {
//       case 'UP_DATE':
//           return { ...aviableTimes, date: ['13:00', '00:00', '09:30'] }
//       default:
//           return { ...aviableTimes }
//   }
//}

//const handleClick = (e) => setaviableTimes({ type: 'SET_REDUCER' })
//const updateReducer = () => { dispatch({ type: 'SET_VALUE', payload: currentDate }) } // event for update reducer

function Reservation() {
    // this line are been here in the begining // const [currentDate, setCurrentDate] = useState(''); // the state of date
    //** this is the early data of tame */
    //const initialTimes = { date: ['17:00', '14:00', '12:00', '20:00', '22:00'] }
    //** this is the begining data of dispatch  */
    //const [aviableTimes, dispatch] = useReducer(updateTime, initialTimes);
    //** BEGIN APP I CHANGE THE DATA BEFORE THIS COMENT  */
    //** First step add all component involved */
    const [Times, setTimes] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [selectedTime, setSelectedTime] = useState('');
    const [bookingResult, setBookingResult] = useState(null);
    const [SelectedGuests, setselectedGuest] = useState(4);
    const [selectedOcasion, setselectedOcasion] = useState('Birthday');


    //** Initialize the first fetch for time */
    useEffect(() => {
        // Fetch available times for today's date when the component mounts
        if (selectedDate) {
            updateTimes(selectedDate);
        }
    }, [selectedDate]);

    const updateTimes = async (Date) => {
        try {
            const availableTimes = await fetchAPI(Date);
            setTimes(availableTimes); // Update the available times based on the selected date

            console.log('Successfully updated times');
        } catch (error) {
            console.error('Error updating times:', error);
        }
    };

    //** ALL FUNCTION FOR EVENTHANDLER onchange and onsubmit */
    const functionTime = (e) => {
        setSelectedTime(e.target.value);
    }

    const functionOcasion = (e) => {
        setselectedOcasion(e.target.value);
    }

    const style_reservation = {
        backgroundImage: `url(${myimg3})`,
    }

    // the variable for update the link
    const navigate = useNavigate();


    // Reservation.js
    const handleSubmit1 = async (e) => {

        e.preventDefault();
        if (selectedDate && selectedTime) {

            const formData = {
                date: selectedDate,
                time: selectedTime,
                guest: SelectedGuests,
                ocasion: selectedOcasion,
                // other form fields
            };
            try {
                const submissionResult = submitAPI(formData);
                // Update dateTimes with the fetched available times
                setBookingResult(submissionResult)
                setTimes((prevTimes) => prevTimes.filter((time) => time !== selectedTime));
                if (submissionResult) {
                    navigate('/confirmation/ConfirmedBooking'); // Navigate to the booking confirmation page
                } else {
                    // Handle submission failure if needed
                    console.error('Booking submission failed.');
                }
            } catch (error) {
                console.error('Error submitting booking:', error);
                setBookingResult(false);
            }

        }
    };

    // ... rest of your component code ...



    return (
        <div style={style_reservation}>
            <div style={{ backgroundColor: 'white' }}>
                <Header />
            </div>
            {/*<Bookform avTimes={aviableTimes} setavTimes={dispatch} cDate={currentDate} setcDate={setCurrentDate} /> */}
            <Bookform newTimes={Times} newSetTimes={setTimes} newSelectedDate={selectedDate} newsetSelectedDate={setSelectedDate} newSelectedTime={selectedTime} newsetSelectedTime={functionTime} newBooking={bookingResult} newSetBookingResult={handleSubmit1} newGuest={SelectedGuests} newsetSelectedGuest={setselectedGuest} newOcasion={selectedOcasion} newsetSelectedOcasion={functionOcasion} />

            <Footer />
        </div>
    )
}
export default Reservation;