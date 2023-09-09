import { ReactComponent as Logo } from './Images/Logo.svg';
import Nav from "./Nav";
/*
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Login from './Pages/Login';
import Reservation from './Pages/Reservation';
import Orderonline from './Pages/Order-online';
import Home from './Pages/Home';
*/

function Header() {
    return (
        <header className="Header">
            <nav>
                <Logo />
                <Nav />
            </nav>


        </header>
    );
}
export default Header;