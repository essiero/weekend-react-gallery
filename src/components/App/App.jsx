import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import GalleryList from '../GalleryList/GalleryList.jsx';
import React from 'react';


function App() {
  useEffect(() => {
    getList()
  }, []);

  const [items, setItems] = useState([]);

  const getList = () => {
      axios({
        method: 'GET',
        url: '/gallery'
      })
        .then((response) => {
          setItems(response.data)
          console.log('response.data aka items: ', response.data)
        })
        .catch((error) => {
          console.log('getList fail:', error);
        })
    }
  
    return (
      <div data-testid="app">
        <Header />
        <GalleryList items={items}/>
        {/* <p>The gallery goes here!</p>
        <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
