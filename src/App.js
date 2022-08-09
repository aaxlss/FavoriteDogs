import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';


function App() {

  const LOCAL_STORAGE_DOGS_NAME = 'DOGS_LIST_V_1'
  const localStorageDogsList = localStorage.getItem(LOCAL_STORAGE_DOGS_NAME);

  let parseDogsList;

  const storeDogs = (store) => {
    localStorage.setItem(LOCAL_STORAGE_DOGS_NAME, store);
  }

  if (!localStorageDogsList) {
    localStorage.setItem(LOCAL_STORAGE_DOGS_NAME, JSON.stringify([]));
    parseDogsList = [];
  } else {
    parseDogsList = JSON.parse(localStorageDogsList);
  }

  const [favoriteDogs, setFavoriteDogs] = useState(parseDogsList);

  return (<BrowserRouter>
    {/* <Layout> */}
    <Routes>
      <Route path="/"
        element={
          <Home
            favoriteDogs={favoriteDogs}
            setFavoriteDogs={setFavoriteDogs}
            storeDogs={storeDogs}
          />
        }
      />
      <Route exact path='/favorites' element={
        <Favorites
          storeDogs={storeDogs}
          parseDogsList={parseDogsList}
        />
      } />
    </Routes>
    {/* </Layout> */}
  </BrowserRouter>);
}

export default App;
