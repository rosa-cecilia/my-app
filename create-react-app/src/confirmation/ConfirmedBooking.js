// ConfirmedBooking.js
import Header from '../Header'
import React from 'react';

function ConfirmedBooking() {
    return (
        <div>
            <div style={{ backgroundColor: 'white' }}>
                <Header />
            </div>
            <h2>Booking Confirmed!</h2>
            <p>Your booking has been successfully confirmed.</p>
        </div>
    );
}

export default ConfirmedBooking;
