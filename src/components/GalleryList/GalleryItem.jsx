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

    // const createItem = (e) => {
    //     e.preventDefault()
    
    //     const newItem = {
    //       name: nameInput,
    //       quantity: Number(quantityInput),
    //       unit: unitInput
    //     }
    
    //     axios({
    //       method: 'POST',
    //       url: '/items',
    //       data: newItem
    //     })
    //       .then((response) => {
    //         getItems()
    //         setNameInput('')
    //         setQuantityInput('')
    //         setUnitInput('')
    //       })
    //       .catch((error) => {
    //         console.error('createItem fail:', error)
    //       })
    //   }

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
            <button onClick={likeCounter} data-testid="like">love it!</button>
            <p>{item.likes > 0 ? `{item.likes} people love this!` : ''}</p>
            <p data-testid="description">{item.description}</p>
        </div>
    )
}

export default GalleryItem;