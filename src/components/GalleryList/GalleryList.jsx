import axios from 'axios';
import GalleryItem from './GalleryItem.jsx';


function GalleryList ({ items }) {
    return (
        <div class="gallery">
            {items.map((item) => {
                return (
                    <GalleryItem key={item.id} item={item} />
                )
            })}
        </div>
    )
}

export default GalleryList;

