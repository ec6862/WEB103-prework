import react from "react";
import { supabase } from "../client";
// import { useParams } from "react-router-dom";

const Card = ({name, url, description, imageURL, order}) => {
    // Here, we are fetching the data for the creators
    // PROGRESS: started async, not finished 7/9
    return (
        <div>
            <p>{order} Name: {name}</p>
        </div>
    )
}

export default Card;