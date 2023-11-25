import { useState } from 'react';
import './GalleryList.css';
import axios from 'axios';



function GalleryItem({ item, getList }) {
    const likeCounter = (e) => {
        let itemID = e.target.id
        axios({
          method: 'PUT',
          url: `/gallery/like/${itemID}`
        }).then((response) => {
          getList();
        }).catch((error) => {
          console.log('PUT /gallery/like/:id fail', error)
        });
    }

    return (
        <div
            key={item.id}
            className="gallery-item"
            data-testid="galleryItem"
        >
            <img src={item.url} data-testid="toggle"></img>
            <br></br>
            {/* <div>Rocks Picked: {rockCounter} {rockCounter >= 50 ? 'done' : ''}</div> */}
            {/* <button onClick={rockCounter > 0 ? decrementRockCounter : 0}>Decrease</button> */}
            <button onClick={likeCounter} id={item.id} data-testid="like">love it!</button>
            <p>{item.likes > 0 ? item.likes + ' people love this!' : ''}</p>
            <p>{item.title}</p>
        </div>
    )
}


export default GalleryItem;
