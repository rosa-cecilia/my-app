const datanav = [
    {
        url: "#Home",
        Name: "Home",
    },
    {
        url: "#About",
        Name: "About",
    },
    {
        url: "#Menu",
        Name: "Menu",
    },
    {
        url: "#Reservation",
        Name: "Reservation",
    },
    {
        url: "#Orderonline",
        Name: "Order online",
    },
    {
        url: "#login",
        Name: "Login",
    },
]

function Nav() {
    return (
        <ul>
            {
                datanav.map(datanav => <li> <a href={datanav.url}> {datanav.Name}</a></li>)
            }
        </ul>
    );

}
export default Nav;