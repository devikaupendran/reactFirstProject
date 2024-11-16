//here we are setting state to card so we import useState in this section to update the state
//state is the dynamic procedure occur in the web application without reloading the page
import React, { useState } from 'react';


function Card(props) {

    //initializing the useState
    let favorites = useState("Add to favorite");
    let activeClass = useState("");

    // destructuring the array
    let [btnTextState, setBtnFavorite] = favorites;
    let [classState, setClassState] = activeClass;

    //onclick function definition for add To favorite button
    function addToFavorite(imgSrc) {

        //changing the state of button 
        setBtnFavorite((prevState) => {
            if (prevState === "Add to favorite") {
                props.getFavImages(imgSrc);
                return "Added to favorite";
            }
            else {
                props.removeFavImage(imgSrc);
                return "Add to favorite";
            }
        })
        //setting active class while pressing the btn
        setClassState((prevClass) => {
            if (prevClass === '') {
                return 'active';
            }
            else {
                return '';
            }
        })
    }
    return (
        //here is the structure of card
        <div className={`card ${classState}`}>
            <i className="fa-solid fa-heart"></i>
            <img src={props.cardContent.imgSrc} />
            <h3> {props.cardContent.name}</h3>
            <p>{props.cardContent.description} </p>
            <button onClick={() => { addToFavorite(props.cardContent.imgSrc) }}> {btnTextState} </button>
        </div>
    )
}
export default Card;



