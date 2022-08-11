import React from "react";
import { Carousel } from "react-responsive-carousel";

const CarouselDogs = ({ onChange, children }) => {

    return (
        <div
            style={{
                width: "100%",
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <div style={{ width: '50%'}}>
                <Carousel
                    swipeable={true}
                    onChange={onChange}
                >
                    {
                        children
                    }
                </Carousel>
            </div>
        </div>

    );
}

export default CarouselDogs