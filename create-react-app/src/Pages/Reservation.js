import Header from '../Header'
import Footer from '../Footer';
import Bookform from '../Book/Bookform';
import myimg3 from "../Images/restaurant.jpg"
import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from '../api';
import { useNavigate } from 'react-router-dom';
import { useMyData } from '../MyDataContex';

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
//export const data = {};

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
    const [SelectedName, setSelectedName] = useState('');
    const [SelectedMail, setSelectedMail] = useState('')
    /** this section is for control error field i'll need need to control the errors and the data */
    const [formData, setFormData] = useState({
        name: 'Default Name',
        email: 'example@example.com',
        date: '',
        time: '',
        guests: '',
        ocasion: '',
        // Add other form fields
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: '',
        ocasion: '',
        // Add other form fields
    });
    //** i need to send the data to the confirmedBooking therefore i need to create a variable */
    const { setSharedData } = useMyData();
    //** i need to check the format of the data to my mail */
    const isValidEmail = (email) => {
        // Implement email validation logic (e.g., using a regex)
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    };

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
    const isValidTimeFormat = (time) => {
        const timeRegex = /^(0[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/i;
        return timeRegex.test(time);
    };
    const handleTimeChange = (e) => {

        const { name, value } = e.target;

        if (name === 'time' && !isValidTimeFormat(value)) {
            setFormErrors({ ...formErrors, [name]: 'Invalid time format' });
        } else {
            setFormErrors({ ...formErrors, [name]: '' });
            setFormData({ ...formData, [name]: value });

        }
        setSelectedTime(e.target.value);

    }

    const handleDateChange = (e) => {
        const { name, value } = e.target;
        const currentDate = new Date().toISOString().split('T')[0];
        const selectedDateValue = e.target.value;

        // Compare the selected date with the current date
        if (name === 'date' && selectedDateValue >= currentDate) {
            setFormErrors({ ...formErrors, [name]: '' });
            setSelectedDate(selectedDateValue); // Update selectedDate only if it's a valid future date
            setFormData({ ...formData, [name]: selectedDateValue });
        } else {
            setFormErrors({ ...formErrors, [name]: `${value} Date cannot be in the past` });
        }
    };
    const handleGuestChange = (e) => {
        const { name, value } = e.target;

        if (name === 'guests' && (value < 3)) {
            setFormErrors({ ...formErrors, [name]: 'Minimum of 3 guests required' });
        } else {
            setFormErrors({ ...formErrors, [name]: '' });
            setselectedGuest(e.target.value);
        }

        setFormData({ ...formData, [name]: value });
    };


    const functionOcasion = (e) => {
        const { name, value } = e.target;
        const lowercasedValue = value.toLowerCase();

        if (name === 'ocasion' && !['birthday', 'anniversary'].includes(lowercasedValue)) {
            setFormErrors({ ...formErrors, [name]: 'Valid occasions are: birthday, anniversary' });
        } else {
            setFormErrors({ ...formErrors, [name]: '' });

            console.log("in the ocasion")
        }

        setFormData({ ...formData, [name]: value });
        setselectedOcasion(e.target.value);
    };



    const style_reservation = {
        backgroundImage: `url(${myimg3})`,
    }


    /** EN OF THE EVENT HANDLER FUNCTION */

    // the variable for update the link
    const navigate = useNavigate();





    // Reservation submit general
    const handleSubmit1 = async (e) => {
        e.preventDefault();
        if (selectedDate && selectedTime) {
            // Create a copy of formData with the latest data
            const updatedFormData = {
                ...formData,
                name: SelectedName,
                email: SelectedMail,
                date: selectedDate,
                time: selectedTime,
                guests: SelectedGuests,
                ocasion: selectedOcasion,
                // other form fields
            };


            try {
                // Send the updated formData to the API
                const submissionResult = await submitAPI(updatedFormData);
                // Update the form data state with the latest data
                setFormData(updatedFormData);
                setBookingResult(submissionResult);
                setTimes((prevTimes) => prevTimes.filter((time) => time !== selectedTime));
                if (submissionResult) {
                    navigate('/confirmation/ConfirmedBooking');
                    setSharedData(updatedFormData);
                } else {
                    console.error('Booking submission failed.');
                }
            } catch (error) {
                console.error('Error submitting booking:', error);
                setBookingResult(false);
            }
        }


    };







    // ... rest of your component code ...

    /** IN THIS SECTION I'LL CONTROL FORM EVENT  */
    const handleInputChangename = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setSelectedName(e.target.value);
        // Validation logic
        if (name === 'name') {
            if (value.length > 15 || value.length < 5) {
                setFormErrors({ ...formErrors, [name]: 'Name must not exceed 50 characters' });
            } else {
                setFormErrors({ ...formErrors, [name]: '' });
            }
        }
    };

    const handleInputChangemail = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setSelectedMail(e.target.value);
        // validation logic 
        if (name === 'email' && !isValidEmail(value)) {
            setFormErrors({ ...formErrors, [name]: 'The format of mail is incorrect' });
        } else { setFormErrors({ ...formErrors, [name]: '' }) };
    }
    /** the changed maked for name and may end here */


    return (
        <div style={style_reservation}>
            <div style={{ backgroundColor: 'white' }}>
                <Header />
            </div>
            {/*<Bookform avTimes={aviableTimes} setavTimes={dispatch} cDate={currentDate} setcDate={setCurrentDate} /> */}
            <Bookform newTimes={Times} newSetTimes={setTimes} newSelectedDate={selectedDate} newsetSelectedDate={handleDateChange} newSelectedTime={selectedTime} newsetSelectedTime={handleTimeChange} newBooking={bookingResult} newSetBookingResult={handleSubmit1} newGuest={SelectedGuests} newsetSelectedGuest={handleGuestChange} newOcasion={selectedOcasion} newsetSelectedOcasion={functionOcasion} newName={SelectedName} newsetName={handleInputChangename} newMail={SelectedMail} newsetMail={handleInputChangemail} newErrors={formErrors} />

            <Footer />
        </div>
    )
}
export default Reservation;