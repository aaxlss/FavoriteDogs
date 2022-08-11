import React, { useState } from "react";
import ButtonDogs from "../Components/ButtonDogs";
import CarouselDogs from "../Components/CarouselDogs";
import { AiFillDelete } from "react-icons/ai";

const Favorites = ({ storeDogs, parseDogsList }) => {

    const [idList, setIdList] = useState(0);
    const [selectedDogDelete, setSelectedDogDelete] = useState(0);
    const [favoriteDogs, setFavoriteDogs] = useState(parseDogsList);

    const deleteFavDog = (favDogList) => {
        const strigifiedDogList = JSON.stringify(favDogList);
        storeDogs(strigifiedDogList);
        setFavoriteDogs([...favDogList]);
    }

    return (<div key={idList} style={{height:'100%'}}> {favoriteDogs.length > 0 &&
        <CarouselDogs
            onChange={(imageIndex) => { setSelectedDogDelete(imageIndex) }}
        >
            {
                favoriteDogs.map((dog, index) => (
                    <div style={{
                        height: 'auto',
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <img key={index} src={dog.url} style={{ width: '50%' }} />
                    </div>))
            }
        </CarouselDogs>}
        <div style={{
                        height: 'auto',
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
            <ButtonDogs
                onClick={() => {
                    let newFavDogList = favoriteDogs.filter((dog, index) => index != selectedDogDelete);
                    deleteFavDog(newFavDogList);

                }}
                style={{background: 'red', color:'white'}}
                icon={<AiFillDelete/>}
                text={'Delete from Favorites'}
            />
        </div>
    </div>)

}

export default Favorites