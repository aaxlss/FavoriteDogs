import React, { useEffect, useState } from "react";
import ButtonDogs from "../Components/ButtonDogs";
import CarouselDogs from "../Components/CarouselDogs";
import { AiOutlineFileImage, AiOutlineFileAdd } from "react-icons/ai";

const Home = ({ favoriteDogs, setFavoriteDogs, storeDogs }) => {
    const [idList, setIdList] = useState(0);
    const [dogsList, setDogsList] = useState([]);
    const [selectedImage, setSelectedImage] = useState(0);

    const VALIDA_DOG_FORMATS = ['jpg', 'png', 'gif', 'jpeg']
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
        console.log(JSON.stringify(newList))
        storeDogs(strigifiedDogList);
        setFavoriteDogs([...newList]);
    }

    const getDogList = () => {
        fetch('https://random.dog/woof.json')
            .then(response => response.json())
            .then(response => {
                console.log(response)
                const splitDogs = response.url.split('.');
                const splitDogsLength = splitDogs.length;
                const dogsFormat = splitDogs[splitDogsLength - 1];
                let newDogList = dogsList;

                if (VALIDA_DOG_FORMATS.includes(dogsFormat)){
                    
                    newDogList.push(response);
                    setDogsList(prev => {
                        prev = newDogList;
                        return [...prev];
                    });
                } else {
                    getDogList();
                    return;
                }
            })

    }

return (<div key={idList}>
    {dogsList.length > 0 && <CarouselDogs
        onChange={(imageIndex) => { setSelectedImage(imageIndex) }}
    >
        {
            dogsList.map((dog, index) => (
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

    {/* Button to add the selected dog to the favorite list */}
    <div
        style={{
            height: 'auto',
            justifyContent: 'space-evenly',
            alignContent: 'center',
            display: 'flex',
            alignItems: 'center'
        }}
    >
        <ButtonDogs
            onClick={() => {
                saveDogsList(dogsList[selectedImage]);
            }}
            icon={<AiOutlineFileAdd />}
            style={{ background: '#23C973', color: 'white' }}
            text={'Add to Favorites'}
        />

        <ButtonDogs
            onClick={() => {
                setDogsList([]);
            }}
            icon={<AiOutlineFileImage />}
            style={{ background: '#0C21D3', color: 'white' }}
            text={'Get new 6 dogs'}
        />
    </div>
</div>)
};

export default Home