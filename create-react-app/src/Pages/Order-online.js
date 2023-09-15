import Header from '../Header'
import Footer from '../Footer';
import '../Css/Order-online.css';
import React, { useState } from 'react';
//import RandomTimeDisplay from './Randomtime';
//import ListComponent from './Listcomponent';

function Orderonline() {
    // Define state variables for form inputs
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('card');
    const dishes = [
        { name: 'dish1', price: 12.60 },
        { name: 'dish2', price: 11.50 },
        { name: 'dish3', price: 4.55 },
        { name: 'dish4', price: 16.45 },
    ];
    const [selectedDishes, setSelectedDishes] = useState([]);  // To store the selected dish
    /** in this section i create to variables for plot the list data in the screen */
    const [DishesTp, setDishesTp] = useState([]);
    //const [Dishnm, setDishnm] = useState([]);
    // Define a state variable for the total price
    const [totalPrice, setTotalPrice] = useState(0); // Set the default price based on the default dish
    // Handle dish selection
    const handleDishChange = (event) => {
        const selectedDishName = event.target.value;
        const selectedDish = dishes.find((dish) => dish.name === selectedDishName);

        if (selectedDish) {
            setSelectedDishes([...selectedDishes, selectedDish]);
            setTotalPrice(totalPrice + selectedDish.price);
            setDishesTp([...DishesTp, `${selectedDish.name}-${selectedDish.price}`]);
            //setDishnm([...Dishnm, selectedDish.price]);
        }
    };

    const dishOptions = dishes.map((dish) => (
        <option key={dish.name} value={dish.name}>
            {dish.name} - ${dish.price.toFixed(2)}
        </option>
    ));

    /** DISPLY A SCREEN CONFIGURATION  */
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
        setName('');
        setAddress('');
        setPhone('');
        setPaymentMethod('card');
        setSelectedDishes([]);
        setTotalPrice(0);
        setDishesTp([]);
    };
    const generateRandomTime = () => {
        const hours = Math.floor(Math.random() * 24);
        const minutes = Math.floor(Math.random() * 60);
        return `${hours}:${minutes}`;
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsModalVisible(!isModalVisible);
        // Add your form submission logic here
        // You can access the form data using state variables (name, address, phone, paymentMethod, dish)
        // Send the data to your server or perform any necessary actions

    };

    return (
        <div >
            <Header />
            <div className="container">
                <h1 style={{ color: '#495e55' }}>Order Form</h1>
                <form onSubmit={handleSubmit}>
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    {/* Address Input */}
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>

                    {/* Phone Number Input */}
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>

                    {/* Payment Method Input (Radio Buttons) */}
                    <div className="form-group" >
                        <label>Payment Method:</label>
                        <input
                            type="radio"
                            id="payment-card"
                            name="payment"
                            value="card"
                            checked={paymentMethod === 'card'}
                            onChange={() => setPaymentMethod('card')}
                            required
                        />
                        <label htmlFor="payment-card">Credit Card</label>
                        <input
                            type="radio"
                            id="payment-cash"
                            name="payment"
                            value="cash"
                            checked={paymentMethod === 'cash'}
                            onChange={() => setPaymentMethod('cash')}
                            required
                        />
                        <label htmlFor="payment-cash">Cash</label>
                    </div>

                    {/* Dish Selection (Dropdown) */}
                    <div className="form-group" >
                        <label htmlFor="dish">Select a Dish:</label>
                        <select
                            id="dish"
                            name="dish"
                            value={''}
                            onChange={handleDishChange}
                        >
                            <option value="" disabled>
                                Select a dish
                            </option>
                            {dishOptions}
                        </select>
                    </div>

                    {/* Total Price Section */}
                    <div className="total-price">
                        <div> Total Price: ${totalPrice.toFixed(2)}</div>
                        <div style={{ color: '#495e55' }}>
                            <section> <ul>
                                {DishesTp.map((dish, index) => (
                                    <li key={index}>{dish}</li>
                                ))}
                            </ul>
                            </section>
                        </div>

                    </div>

                    {/* Submit Button */}
                    <div className="form-group">
                        <button type="submit">Pay Now</button>
                    </div>
                </form>
            </div>
            {/* Modal */}
            {isModalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}>
                            &times;
                        </span>
                        <h2>Confirmation</h2>
                        {/* Display the form data or any other confirmation message */}
                        <p>Name: {name}</p>
                        <p>Address: {address}</p>
                        <p>Phone Number: {phone}</p>
                        <p> payment Method: {paymentMethod} </p>
                        <p> Dishes: {DishesTp} </p>
                        <p> Time to delivery: {generateRandomTime()}</p>

                        {/* Add more fields as needed */}
                    </div>
                </div>
            )}
            <Footer />
        </div>


    );
}

export default Orderonline;

