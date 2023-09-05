function Bookform(props) {
    const my_style = {
        display: 'grid',
        gap: 20,
        'margin-left': '25vw',
        width: '50vw',
        border: 'solid #495e55',
        'border-radius': 20,
        padding: 30,
        'margin-bottom': '20vh',
        'margin-top': '20vh',
        'font-family': 'verdana',
        'font-size': '1rem',
        color: '#495e55',
        'box-shadow': ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        'background-color': '#edefee',


    }
    {/** 
        const myfunction = (e) => {
            const value = e.target.value
            props.setcDate(value)
            props.setavTimes({ type: 'UP_DATE', payload: value })
        }

        const [guests, setGuest] = useState(4);
        const [occasion, setOccasion] = useState('Birthday');
        //const [aviableTimes, setaviableTimes] = useState('17:00');
        //const [resdate, setRestdate] = useState(current)
        function handleClick(e) {
            setGuest(guests);
            setOccasion(occasion);
            props.setavTimes(props.avTimes);
        }
    
    */}
    return (
        <div>
            <form style={my_style} onSubmit={props.newSetBookingResult}>
                <label for="rest-date">Choose date</label>
                {/*<input type="date" id="res-date" value={props.cDate} onChange={myfunction} />*/}
                <input type="date" id="res-date" value={props.newSelectedDate} onChange={e => props.newsetSelectedDate(e.target.value)} />
                <label for="res-time">Choose time</label>
                {
                    /**
                     * <select id="res-time ">
                    {
                        props.avTimes.date.map((data) => (
                            <option key={data} value={data}> {data} </option>
                        ))
                    }
                </select>
                     */
                }
                <select id="res-time " value={props.newSelectedTime} onChange={props.newsetSelectedTime}>
                    {
                        props.newTimes.map((data) => (
                            <option key={data} value={data}> {data} </option>
                        ))
                    }
                </select>
                <label for="guests">Number of guests</label>
                { /** <input type="number" min="1" max="10" id="guests" value={guests} onChange={e => setGuest(e.target.value)} /> */}
                <input type="number" min="1" max="10" id="guests" value={props.newGuest} onChange={e => props.newsetSelectedGuest(e.target.value)} />
                <label for="occasion">Occasion</label>
                {/** <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}> */}
                <select id="occasion" value={props.newOcasion} onChange={props.newsetSelectadOcasion}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                { /**  <input type="submit" value="Make Your reservation" onClick={handleClick} /> */}
                <button type="submit">Submit</button>
            </form>
            {props.newBooking === true && <p>Booking successful!</p>}
            {props.newBooking === false && <p>Booking failed. Please try again.</p>}
        </div>
    )
}
export default Bookform;