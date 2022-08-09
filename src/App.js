import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';



function App() {

  const LOCAL_STORAGE_DOGS_NAME = 'DOGS_LIST_V_1'
  const localStorageDogsList = localStorage.getItem(LOCAL_STORAGE_DOGS_NAME);
  let parseDogsList;

  if(!localStorageDogsList){
    localStorage.setItem(LOCAL_STORAGE_DOGS_NAME, JSON.stringify([]));
    parseDogsList = [];
  } else {
    parseDogsList = JSON.parse(localStorageDogsList);
  }

  const saveDogsList = (dogsList) => {
    let newList = favoriteDogs;
    newList.push(dogsList);
    const strigifiedDogList = JSON.stringify(newList);
    localStorage.setItem(LOCAL_STORAGE_DOGS_NAME,strigifiedDogList);
    setFavoriteDogs([...newList]);
  }

  const deleteFavDog = (favDogList) => {
    const strigifiedDogList = JSON.stringify(favDogList);
    localStorage.setItem(LOCAL_STORAGE_DOGS_NAME,strigifiedDogList);
    setFavoriteDogs([...favDogList]);
  }

  const [dogsList, setDogsList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [favoriteDogs, setFavoriteDogs] = useState(parseDogsList);
  const [selectedDogDelete, setSelectedDogDelete] = useState(0);
  const [idList, setIdList] = useState(0);

  const getDogList = () => {
      fetch('https://random.dog/woof.json')
        .then(response => response.json())
        .then(response => {
          let newDogList = dogsList;
          newDogList.push(response);
          console.log('newDogList',newDogList);
          return newDogList;
        })
        .then(newDogList  => {
          setDogsList(prev => {
            prev = newDogList;

            return [...prev];
          })
        })

  }

useEffect(() => {
 
  if(dogsList.length < 6){
    console.log(dogsList.length);
    getDogList();
  }
  setIdList(idList + 1);
},[dogsList]);


useEffect(() => {
  setIdList(idList + 1);
},[favoriteDogs]);

  return (
    <>
      {/* list of dogs from URL */}
      <div key={idList}>
        {dogsList.length > 0 && <Carousel
        renderItem={item => item}
          onChange={(imageIndex) => { setSelectedImage(imageIndex) }}
        >
          {
            dogsList.map((dog, index) => (<div >
              <img key={index} src={dog.url} />
            </div>))
          }
        </Carousel>}

      {/* Button to add the selected dog to the favorite list */}
      <button
        onClick={() => {

          saveDogsList(dogsList[selectedImage]);
        }}
      >Add to Favorites</button>

      <button
        onClick={() => {
          setDogsList([]);
        }}
      >Get new 6 dogs</button>

      {/* list of favorite dogs from URL */}
      {favoriteDogs.length > 0 && <Carousel
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
      </div>
    </>
  );
}

export default App;
