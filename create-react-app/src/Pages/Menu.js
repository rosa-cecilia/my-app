import Header from '../Header'
import Footer from '../Footer';
import '../Css/Menu.css';
function Menu() {
    const menuData = [
        {
            section: 'Appetizers',
            dishes: [
                { name: 'Mozzarella Sticks', price: '$5.99', image: "https://source.unsplash.com/300x200/?appetizer" },
                { name: 'Spinach Artichoke Dip', price: '$6.99', image: 'https://source.unsplash.com/300x200/?appetizer' },
                { name: 'Bruschetta', price: '$4.99', image: 'https://source.unsplash.com/300x200/?appetizer' },
                { name: 'Calamari:', price: '$7.99', image: 'https://source.unsplash.com/300x200/?appetizer' },
            ],
        },
        {
            section: 'Main Courses',
            dishes: [
                {
                    name: 'Grilled Salmon with Lemon Butter Sauce', price: '$12.99', image: 'https://source.unsplash.com/300x200/?main-course'
                },
                {
                    name: 'Beef Tenderloin Steak with Red Wine Reduction', price: '$14.99', image: 'https://source.unsplash.com/300x200/?main-course'
                },
                {
                    name: 'Vegetarian Lasagna with Fresh Basil Pesto', price: '$10.99', image: 'https://source.unsplash.com/300x200/?main-course'
                },
                {
                    name: 'Chicken Alfredo Pasta with Garlic Bread', price: '$16.99', image: 'https://source.unsplash.com/300x200/?main-course'
                },
            ],
        },
        {
            section: 'dessert',
            dishes: [
                {
                    name: 'Chocolate Lava Cake', price: '$12.99', image: 'https://source.unsplash.com/300x200/?dessert'
                },
                {
                    name: 'Tiramisu', price: '$14.99', image: 'https://source.unsplash.com/300x200/?dessert'
                },
                {
                    name: 'New York Cheesecake', price: '$10.99', image: 'https://source.unsplash.com/300x200/?dessert'
                },
                {
                    name: 'Strawberry Shortcake', price: '$16.99', image: 'https://source.unsplash.com/300x200/?dessert'
                },
            ],
        },
        // Add two more sections with dishes
    ];
    const MenuItem = ({ name, price, image }) => (
        <div className="menu-item">
            <img src={image} alt={name} className="dish-image" />
            <div className="dish-info">
                <span className="dish-name">{name}</span>
                <span className="dish-price">{price}</span>
            </div>
        </div>
    );

    const MenuSection = ({ section, dishes }) => (
        <div className="menu-section">
            <h2>{section}</h2>
            <div className='menu-item'>
                {dishes.map((dish, index) => (
                    <MenuItem key={index} name={dish.name} price={dish.price} image={dish.image} />
                ))}
            </div>
        </div>
    );

    return (
        <div>
            <Header />
            <div className="menu-page" style={{ backgroundColor: '#edefee' }}>
                {menuData.map((section, index) => (
                    <MenuSection key={index} section={section.section} dishes={section.dishes} />
                ))}
            </div>
            <Footer />
        </div>
    )
}
export default Menu;