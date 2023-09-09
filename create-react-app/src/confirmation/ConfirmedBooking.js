// ConfirmedBooking.js
import Header from '../Header';
import Footer from '../Footer';
import backgroundImg from "../Images/restaurant.jpg"
import React from 'react';
import { useMyData } from '../MyDataContex';
import { Link } from 'react-router-dom'; // Import the Link component if you're using React Router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import the desired icon

function ConfirmedBooking() {
    const my_style = {
        display: 'flex',
        flexDirection: 'column', // To stack paragraphs vertically
        alignItems: 'center', // Center content horizontally
        justifyContent: 'center', // Center content vertically
        height: '100vh', // Adjust the height as needed
        gap: '1rem', // Add space between paragraphs
        //backgroundImage: `url(${backgroundImg})`,
        backgroundColor: ' #f2f2f2'
    };
    const my_style2 = {
        border: '2px solid #595e55', // Add a border
        //padding: '0.5rem', // Add padding inside the border
        borderRadius: '10px', // Add border-radius
        backgroundColor: '#ffffff', // Add background-color
        boxShadow: '0 0 10px #595e55', // Add box-shadow
        padding: '1rem', // Add padding inside the border
        color: '#595e55', // Set font color
        fontSize: '1.2rem', // Set font size
    }
    const { sharedData } = useMyData();

    return (
        <div>
            <div style={{ backgroundColor: 'white' }}>
                <Header />
            </div>
            <div style={my_style}>
                <div style={{ fontSize: '2.5rem', color: '#F4CE14', fontFamily: 'cursive' }}>
                    <h2>Booking Confirmed!</h2>
                </div>
                <div style={my_style2}>
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
