import React from "react";
import { Carousel } from "react-responsive-carousel";

const CarouselDogs = ({ onChange, children }) => {

    return (<Carousel
        onChange={onChange}
    >
        {
            children
        }
    </Carousel>);
}

export default CarouselDogs