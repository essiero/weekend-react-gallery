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
                <div 
                    className='emptyBox'
                    data-testid="description">{item.description}</div>
            )
        } else {
            return (
                <div>
                <img 
                    src={item.url} 
                    ></img>
  
            </div>
            )
        }
    }

    const displayLikes = () => {
        if(item.likes === 0){
            return (<></>)
        } else if (item.likes === 1){
            return (<p>1 person loves this!</p>)
        } else {
            return (
                <p>{item.likes} people love this!</p>
            )          
        }
    }

    return (
        <div
            key={item.id}
            className="gallery-item"
            data-testid="galleryItem"
            onClick={toggleDescription}
        ><div data-testid="toggle">
            {displayDescription()}
            </div>
            {/* <img 
                src={item.url} 
                data-testid="toggle">
                </img> */}
            <br></br>
            <button onClick={likeCounter} id={item.id} data-testid="like">❤️</button>
            {displayLikes()}
            {/* <p>{item.likes > 0 ? item.likes + ' people love this!' : ''}</p> */}
            <p>{item.title}</p>
        </div>
    )
}


export default GalleryItem;
