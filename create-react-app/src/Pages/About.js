import Header from '../Header'
import Footer from '../Footer';
import '../Css/AboutUs.css';
import React from 'react';
import foto1 from '../Images/foto1.jpg';
import foto2 from '../Images/foto2.jpg';
import foto3 from '../Images/foto3.jpg';
import foto4 from '../Images/foto4.jpg';
import foto5 from '../Images/foto5.jpg';

//import '../AboutUs.css'; // Create a CSS file for styling
const testimonials = [
    {
        id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.Praesent libero.Sed cursus ante dapibus diam.Sed nisi.Nullaquis sem at nibh elementum imperdiet',
        imgSrc: `${foto1}`,
        name: 'Marcos',
    },
    {
        id: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.Praesent libero.Sed cursus ante dapibus diam.Sed nisi.Nullaquis sem at nibh elementum imperdiet',
        imgSrc: `${foto2}`,
        name: 'Alicia',
    },
    {
        id: 3,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.Praesent libero.Sed cursus ante dapibus diam.Sed nisi.Nullaquis sem at nibh elementum imperdiet',
        imgSrc: `${foto3}`,
        name: 'Olga',
    },
    {
        id: 4,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.Praesent libero.Sed cursus ante dapibus diam.Sed nisi.Nullaquis sem at nibh elementum imperdiet',
        imgSrc: `${foto4}`,
        name: 'Diego',
    },
    {
        id: 5,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.Praesent libero.Sed cursus ante dapibus diam.Sed nisi.Nullaquis sem at nibh elementum imperdiet',
        imgSrc: `${foto5}`,
        name: 'Amalia'
    }
    // Add more testimonials here
];
function AboutUs() {

    return (

        <div >
            <Header />
            <div className="about-us">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className={`testimonial ${index % 2 === 0 ? 'photo-left' : 'photo-right'}`}
                    >
                        <div className="testimonial-photo">
                            <img src={testimonial.imgSrc} alt={`Testimonial ${testimonial.id}`} />
                        </div>
                        <div className="testimonial-text">
                            <p>{testimonial.text}</p>
                            <h4>{testimonial.name}</h4>
                        </div>

                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;
