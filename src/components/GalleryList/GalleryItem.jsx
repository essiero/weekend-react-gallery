import { useState } from 'react';
import './GalleryList.css'


function GalleryItem({ item }) {
    const likeCounter = (props) => {
        let [likeCounter, setLikeCounter] = useState(0);
        const incrementLikeCounter = () => {
            setLikeCounter(
                likeCounter + 1
            );
        }
    }
    return (
        <div
            key={item.id}
            className="gallery-item"
        >
            <img src={item.url}></img>
            <br></br>
            <button onClick={likeCounter}>love it!</button>
            <p>{item.likes} people love this</p>
        </div>
    )
}

export default GalleryItem;