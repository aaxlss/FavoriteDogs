import React, { useState } from "react";
import ButtonDogs from "../Components/ButtonDogs";
import CarouselDogs from "../Components/CarouselDogs";

const Favorites = ({ storeDogs, parseDogsList }) => {

    const [idList, setIdList] = useState(0);
    const [selectedDogDelete, setSelectedDogDelete] = useState(0);
    const [favoriteDogs, setFavoriteDogs] = useState(parseDogsList);

    const deleteFavDog = (favDogList) => {
        const strigifiedDogList = JSON.stringify(favDogList);
        storeDogs(strigifiedDogList);
        setFavoriteDogs([...favDogList]);
    }

    return (<div key={idList}> {favoriteDogs.length > 0 &&
        <CarouselDogs
            onChange={(imageIndex) => { setSelectedDogDelete(imageIndex) }}
        >
            {
                favoriteDogs.map((dog) => (<div>
                    <img src={dog.url} />
                </div>))
            }
        </CarouselDogs>}
        <ButtonDogs
            onClick={() => {
                let newFavDogList = favoriteDogs.filter((dog, index) => index != selectedDogDelete);
                console.log(newFavDogList)
                deleteFavDog(newFavDogList);

            }}
            text={'Delete from Favorites'}
        />
    </div>)

}

export default Favorites