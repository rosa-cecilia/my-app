import React from "react"
import { Link } from "react-router-dom";
const Card = ({ title, description, imageSrc, alt, price, order }) => {

    return (
        <div className="card">
            <img src={imageSrc} alt={alt} className="card--img" />
            <div className="card--info1">
                <h3> {title}</h3>
                <h4> {price}</h4>
            </div>
            <div className="card--order">
                <p> {description}</p>
                <button> <Link to={'./Pages/Order-online'}> {order}</Link> </button>
            </div>

        </div>
    );

}
export default Card;