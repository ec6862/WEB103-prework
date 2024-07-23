import react from "react";
import { supabase } from "../client";
// import { useParams } from "react-router-dom";

const Card = ({name, url, description, imageURL}) => {
    // Here, we are fetching the data for the creators
    // PROGRESS: started async, not finished 7/9
    return (
        <div>
            <p>Name: {name}</p>
            <p>URL: {url}</p>
            <p>Description: {description}</p>
            <p>Image: {imageURL}</p>
        </div>
    )
}

export default Card;