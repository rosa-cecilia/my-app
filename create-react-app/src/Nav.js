import { Link } from 'react-router-dom';
function Nav() {
    const navItem = [
        {
            Nname: "Home",
            Nurl: "/",

        },

        {
            Nname: "About",
            Nurl: '/Pages/About',

        },
        {
            Nname: "Menu",
            Nurl: '/Pages/Menu',

        },
        {
            Nname: "Reservation",
            Nurl: '/Pages/Reservation',

        },
        {
            Nname: "Order online",
            Nurl: '/Pages/Order-online',

        },
        {
            Nname: "Login",
            Nurl: '/Pages/Login',
        },
    ]

    return (
        <nav>
            {
                navItem.map((item) => (
                    <Link className='nav-item' to={item.Nurl} >  {item.Nname}</Link>
                ))
            }


        </nav>

        /* <ul>
                {
                    navItem.map((item) => (
                        <li > <a href={item.Nurl} > {item.Nname}</a></li>
                    ))
                }
            </ul>
            */


        /*<nav>
                {
                    navItem.map((item) => (
                        <Link to={item.Nurl} className='nav-item'>{item.Nname}</Link>
                    ))
                }

            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Pages/About' element={<About />} />
                <Route path='/Pages/Menu' element={<Menu />} />
                <Route path='/Pages/Reservation' element={<Reservation />} />
                <Route path='/Pages/Order-online' element={<Orderonline />} />
                <Route path='/Pages/Login' element={<Login />} />
            </Routes>
            */


    );
}
export default Nav;
