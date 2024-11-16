import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Card from './components/Card'
import cardData from './components/cardData';
import './App.css'


// the imported Card is stored in the variable card
function MyApp() {

    //destructuring the useState array
    let [favImages, setFavImages] = useState([]);

    //function definition for favorite image
    function getFavImages(imgSrc) {
        setFavImages([...favImages,imgSrc])
    }
    let userFavImages = favImages.map((imgSrc) => {
        return(
            <div className='favImage'>
                <i className="fa-solid fa-square-xmark" onClick={() => removeImageByClick(imgSrc)}></i>
                <img src={imgSrc}/>
            </div>  
        )
    })

    //remove the favimage
    function removeFavImage(imgSrc){
        setFavImages([...favImages].filter((image) => {
            return(image != imgSrc);
        }))
    }

    //remove fav image by close button
    function removeImageByClick(imgSrc){
        setFavImages([...favImages].filter( (currentImage) => {
            return currentImage != imgSrc;
        }))
    }
    let card = cardData.map((cardItem) => {
        return (
            <Card
                cardContent={{
                    imgSrc: cardItem.imgSrc,
                    name: cardItem.name,
                     description: cardItem.description,
                }}
                getFavImages={getFavImages}
                removeFavImage = {removeFavImage}
                
            />
        )
    })
    return (
        <>
            <Header />
            <Hero />
            <div className="card-container">
                <div className='destination'>
                    <h2> Destination </h2>
                    <div className='card-flex'>{card}</div>
                </div>

                <div className='favorites'>
                    <h2> Favorites </h2>
                    <div className='favoriteImage'>{userFavImages}</div>
                </div>
            </div>

            <Footer />
        </>);
}
export default MyApp;