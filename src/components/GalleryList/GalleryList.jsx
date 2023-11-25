import axios from 'axios';
import GalleryItem from './GalleryItem.jsx';


function GalleryList ({ items, getList }) {
    return (
        <div className="gallery" data-testid="galleryList">
            {items.map((item) => {
                return (
                    <GalleryItem key={item.id} item={item} getList={getList}/>
                )
            })}
        </div>
    )
}

export default GalleryList;

