import React from "react";
import pseudoheder from "./Images/MarioandAdrian b.jpg"
import myimg1 from "./Images/lemondessert.jpg"
import myimg2 from "./Images/restauranfood.jpg"
import myimg3 from "./Images/greeksalad.jpg"
import Card from "./Card";



function Main() {
    const dataObject = [
        {
            //getImageSrc: () => require("./Images/restauranfood.jpg"),
            imagen: myimg1,
            title: "Greek salad",
            price: "$12.9",
            order: "Order delivery 🛵🛵🛵",
            alt: "imagenprueba1",
            description: "orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias .",

        },
        {
            //getImageSrc: () => require("./Images/greeksalad.jpg"),
            imagen: myimg2,
            title: "Meal",
            price: "$9.9",
            order: "Order delivery 🛵🛵🛵",
            alt: "imagenprueba2",
            description: "orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias .",

        },
        {
            //igetImageSrc: () => require("./Images/lemondessert.jpg"),
            imagen: myimg3,
            title: "Fried chiken",
            price: "$2.99",
            order: "Order delivery 🛵🛵🛵",
            alt: "imagenprueba2",
            description: "orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias .",

        },

    ]
    return (
        <main>
            < div className="Pseudoheader">

                <div class="black-box">
                    <h1>Little Lemon</h1>
                    <h2> Chicago</h2>
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las in</p>
                    <button> Reserve table</button>
                </div>
                <div class="gray-box">
                    <img src={pseudoheder} alt="imageheader" />
                </div>
            </div>
            <div className="weeksection">
                <h1> This week specials </h1>
                <button>Online menu</button>
            </div>
            <div id="card-distribution">
                {dataObject.map((project) => (
                    <Card
                        imageSrc={project.imagen}
                        alt={project.alt}
                        title={project.title}
                        price={project.price}
                        description={project.description}
                        order={project.order}
                    />
                ))}

            </div>




        </main>

    )
}
export default Main;