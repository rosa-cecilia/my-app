/*import Header from './Header';
import Main from './Main';
import Footer from './Footer';
*/
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Login from './Pages/Login';
import Reservation from './Pages/Reservation';
import Orderonline from './Pages/Order-online';
import Home from './Pages/Home';
import ConfirmedBooking from './confirmation/ConfirmedBooking';
//import ConfirmedBooking from './ConfirmedBooking'; // Import your ConfirmedBooking component
import { MyDataProvider } from './MyDataContex';

import './App.css';

function App() {
  return (
    <MyDataProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Pages/About' element={<About />} />
          <Route path='/Pages/Menu' element={<Menu />} />
          <Route path='/Pages/Reservation' element={<Reservation />} />
          <Route path='/Pages/Order-online' element={<Orderonline />} />
          <Route path='/Pages/Login' element={<Login />} />
          <Route path="/confirmation/ConfirmedBooking" element={<ConfirmedBooking />} />
        </Routes>


      </div>
    </MyDataProvider>
  );
}

export default App;
