import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';



function App() {

  const [dogsList, setDogsList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [favoriteDogs, setFavoriteDogs] = useState([]);
  const [selectedDogDelete, setSelectedDogDelete] = useState(0);
  const [idList, setIdList] = useState(0);

  const getDogList = () => {

    for (let index = 0; index < 6; index++) {
      fetch('https://random.dog/woof.json')
        .then(response => response.json())
        .then(response => setDogsList(prev => {
          console.log('prev', prev)
          if (prev.length < 6) {
            prev.push(response);
          }
          return prev
        }))
        .then(() => setIdList(idList + 1))

    }
  }

  useEffect(() => {
    if(dogsList.length < 6){
      setIdList(idList + 1);
    }
    
  }, [idList]);


  return (
    <>
      {/* list of dogs from URL */}
      <div key={idList}>
        {dogsList.length > 0 && <Carousel
        
          onChange={(imageIndex) => { setSelectedImage(imageIndex) }}
        >
          {
            dogsList.map((dog, index) => (<div >
              <img key={index} src={dog.url} />
            </div>))
          }
        </Carousel>}

      </div>
      {/* Button to add the selected dog to the favorite list */}
      <button
        onClick={() => {
          setFavoriteDogs(prev => {

            return [...prev, dogsList[selectedImage]]
          })
        }}
      >Add to Favorites</button>

      <button
        onClick={() => {
          setDogsList([]);
          getDogList();
        }}
      >Get new 6 dogs</button>

      {/* list of favorite dogs from URL */}
      <Carousel
        onChange={(imageIndex) => { setSelectedDogDelete(imageIndex) }}
      >
        {
          favoriteDogs.map((dog) => (<div>
            <img src={dog.url} />
          </div>))
        }
      </Carousel>
      <button
        onClick={() => {
          setFavoriteDogs(prev => {
            const newFavoriteList = prev.filter((dog, index) => index != selectedDogDelete)
            return newFavoriteList;
          })
        }}
      >Delete from Favorites</button>
    </>
  );
}

export default App;
