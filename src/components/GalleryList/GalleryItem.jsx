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

    const [onDescription, setOnDescription] = useState(false)

    const toggleDescription = () => {
        setOnDescription(!onDescription);
    }

    const displayDescription = () => {

        if (onDescription) {
            return (
                <>
                <>{item.description}</>
                </>
            )
        } else {
            return (
                <div>
                <img 
                    src={item.url} 
                    data-testid="toggle" 
                    onClick={toggleDescription}></img>
  
            </div>
            )
        }
    }

    return (
        <div
            key={item.id}
            className="gallery-item"
            data-testid="galleryItem"
            onClick={toggleDescription}
        >
            {displayDescription()}
            {/* <img 
                src={item.url} 
                data-testid="toggle">
                </img> */}
            <br></br>
            <button onClick={likeCounter} id={item.id} data-testid="like">love it!</button>
            <p>{item.likes > 0 ? item.likes + ' people love this!' : ''}</p>
            <p>{item.title}</p>
        </div>
    )
}


export default GalleryItem;
