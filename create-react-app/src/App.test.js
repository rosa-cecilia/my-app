import { render, screen } from '@testing-library/react';
import App from './App';
import Bookform from './Book/Bookform';
import { renderHook } from '@testing-library/react-hooks';
import { useReducer } from 'react';
import { Times, updateTimes } from './Pages/Reservation'; // Import your Times function and Import your updateTimes function

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//test('Renders the BookingForm heading', () => {
render(<Bookform />);
const headingElement = screen.getByText("Make Your reservation");
expect(headingElement).toBeInTheDocument();
//})


// Mock the fetchAPI function to return a test array of times
jest.mock('./api', () => ({
  fetchAPI: jest.fn(() => ['10:00 AM', '11:00 AM', '12:00 PM']),
}));

test('Times should set available times', () => {
  const { result } = renderHook(() => useReducer(Times, [])); // Assuming you're using react-hooks-testing-library

  const [availableTimes] = result.current;

  // Assert that availableTimes contains the expected test times
  expect(availableTimes).toEqual(['10:00 AM', '11:00 AM', '12:00 PM']);
});


import { updateTimes } from './your-component'; // Import your updateTimes function

test('updateTimes should set available times based on selected date', () => {
  const { result } = renderHook(() => useReducer(updateTimes, [])); // Assuming you're using react-hooks-testing-library

  const [, dispatch] = result.current;

  // Dispatch an action with a selected date
  const selectedDate = '2023-07-15'; // Change this to your desired date
  dispatch({ type: 'SELECT_DATE', payload: selectedDate });

  const [availableTimes] = result.current;

  // Assert that availableTimes contains the expected test times based on the selected date
  expect(availableTimes).toEqual(['10:00 AM', '11:00 AM', '12:00 PM']); // Adjust the expected times as needed
});
