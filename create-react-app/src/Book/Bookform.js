function Bookform(props) {

    const my_style = {
        display: 'grid',
        gap: 20,
        'margin-left': '15%', // Adjust the margin as needed
        'margin-right': '15%', // Adjust the margin as needed
        'max-width': '60%', // Set a maximum width for the form
        border: 'solid #495e55',
        'border-radius': 20,
        padding: 20,
        'margin-bottom': '20vh',
        'margin-top': '20vh',
        'font-family': 'verdana',
        'font-size': '1rem',
        color: '#495e55',
        'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        'background-color': '#edefee',
    };
    if (window.matchMedia('(max-width: 280px)').matches) {
        my_style['margin-left'] = '2%'; // Adjust the margin as needed for smaller screens
        my_style['margin-right'] = '2%'; // Adjust the margin as needed for smaller screens
        my_style['max-width'] = '96%'; // Adjust the maximum width for smaller screens
    }
    return (
        <div>
            <form style={my_style} onSubmit={props.newSetBookingResult}>
                <label htmlFor="Name">Name </label>
                <input type="text" id="name" name="name" onChange={props.newsetName} value={props.newName} required minLength={5} maxLength={15} pattern="[A-Za-z ]+" />
                <label htmlFor="Email"> Email</label>
                <input type="email" id="email" name="email" value={props.newMail} onChange={props.newsetMail} required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" />
                <label htmlFor="rest-date">Choose date</label>
                <input type="date" id="res-date" name="date" value={props.newSelectedDate} onChange={props.newsetSelectedDate} required />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={props.newSelectedTime} onChange={props.newsetSelectedTime}>
                    {
                        props.newTimes.map((data) => (
                            <option key={data} value={data}> {data} </option>
                        ))
                    }
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" min="1" max="15" id="guests" name="guests" value={props.newGuest} onChange={props.newsetSelectedGuest} />
                <label htmlFor="ocasion">Occasion</label>
                <select id="ocasion" name="ocasion" value={props.newOcasion} onChange={props.newsetSelectedOcasion}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button type="submit" disabled={Object.values(props.newErrors).some(error => error !== '')}> <span>&times;</span>Submit</button>
            </form>
            {props.newBooking === true && <p>Booking successful!</p>}
            {props.newBooking === false && <p>Booking failed. Please try again.</p>}
        </div>
    )
}
export default Bookform;