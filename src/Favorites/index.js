import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";

const Favorites = ({ storeDogs, parseDogsList }) => {

    const [idList, setIdList] = useState(0);
    const [selectedDogDelete, setSelectedDogDelete] = useState(0);
    const [favoriteDogs, setFavoriteDogs] = useState(parseDogsList);

    const deleteFavDog = (favDogList) => {
        const strigifiedDogList = JSON.stringify(favDogList);
        storeDogs(strigifiedDogList);
        setFavoriteDogs([...favDogList]);
    }

    return (<div key={idList}> {favoriteDogs.length > 0 && <Carousel
        onChange={(imageIndex) => { setSelectedDogDelete(imageIndex) }}
    >
        {
            favoriteDogs.map((dog) => (<div>
                <img src={dog.url} />
            </div>))
        }
    </Carousel>}
        <button
            onClick={() => {
                let newFavDogList = favoriteDogs.filter((dog, index) => index != selectedDogDelete);
                console.log(newFavDogList)
                deleteFavDog(newFavDogList);

            }}
        >Delete from Favorites</button>
    </div>)

}

export default Favorites