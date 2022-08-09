import React, { useEffect, useState } from "react";
import ButtonDogs from "../Components/ButtonDogs";
import CarouselDogs from "../Components/CarouselDogs";

const Home = ({ favoriteDogs, setFavoriteDogs, storeDogs}) => {
    const [idList, setIdList] = useState(0);
    const [dogsList, setDogsList] = useState([]);
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {

        if (dogsList.length < 6) {
            console.log(dogsList.length);
            getDogList();
        }
        setIdList(idList + 1);
    }, [dogsList]);


    useEffect(() => {
        setIdList(idList + 1);
    }, [favoriteDogs]);

    const saveDogsList = (dogsList) => {
        let newList = favoriteDogs;
        newList.push(dogsList);
        const strigifiedDogList = JSON.stringify(newList);
        console.log( JSON.stringify(newList))
        storeDogs(strigifiedDogList);
        setFavoriteDogs([...newList]);
    }

    const getDogList = () => {
        fetch('https://random.dog/woof.json')
          .then(response => response.json())
          .then(response => {
            let newDogList = dogsList;
            newDogList.push(response);
            console.log('newDogList', newDogList);
            return newDogList;
          })
          .then(newDogList => {
            setDogsList(prev => {
              prev = newDogList;
    
              return [...prev];
            })
          })
    
      }

    return (<div key={idList}>
        {dogsList.length > 0 && <CarouselDogs
            renderItem={item => item}
            onChange={(imageIndex) => { setSelectedImage(imageIndex) }}
        >
            {
                dogsList.map((dog, index) => (<div >
                    <img key={index} src={dog.url} />
                </div>))
            }
        </CarouselDogs>}

        {/* Button to add the selected dog to the favorite list */}
        <ButtonDogs
            onClick={() => {
                saveDogsList(dogsList[selectedImage]);
            }}
            text={'Add to Favorites'}
        />

        <ButtonDogs
            onClick={() => {
                setDogsList([]);
            }}
            text={'Get new 6 dogs'}
        /></div>)
};

export default Home