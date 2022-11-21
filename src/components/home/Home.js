import React from 'react'
import "./Home.css"
import Product from "../product/Product.js"
import { products, bannerImg } from '../../products'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div className="home">
            {/* <img className="home__image"
                src={bannerImg}
                alt="" /> */}

            <Carousel className="carousel slide">
                <Carousel.Item >
                <div>
                    <img className="home__image" 
                    src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" />
    
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div>
                    <img className="home__image" 
                    src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" />
                  
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div>
                    <img className="home__image" 
                    src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" />
             
                </div>
                </Carousel.Item>
            </Carousel>

            {/*product id, title, price, rating */}
            <div className="home__row">
                {products?.map((item, id) => {
                    return (
                        <Product key={id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                        />
                    )
                })}

            </div>

        </div>

    )
}

export default Home
