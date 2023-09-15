import Header from '../Header';
import Footer from '../Footer';
import backgroundImg from "../Images/restaurant.jpg";
import React from 'react';
import { useMyData } from '../MyDataContex';
import { Link } from 'react-router-dom'; // Import the Link component if you're using React Router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import the desired icon
import '../Css/ConfirmedBooking.css'
function ConfirmedBooking() {


    const { sharedData } = useMyData();

    return (
        <div>
            <div style={{ backgroundColor: 'white' }}>
                <Header />
            </div>
            <div className='my_style'>
                <div className='my_style3'>
                    <h2>Booking Confirmed!</h2>
                </div>
                <div className='my_style2'>
                    <p> Please check your data ....</p>
                    <p> Name: {sharedData.name} &nbsp;&nbsp;&nbsp;   </p>
                    <p> Mail: {sharedData.email}</p>
                    <p> Date : {sharedData.date}</p>
                    <p> Time: {sharedData.time} </p>
                    <p>Ocasion : {sharedData.ocasion}</p>
                    <p> Guest: {sharedData.guests}</p>
                </div>
                <Link to="../Pages/Reservation" >
                    <FontAwesomeIcon icon={faArrowLeft} /> Back to Reservation
                </Link>
            </div>
            <Footer />
        </div>
    );
}

export default ConfirmedBooking;
