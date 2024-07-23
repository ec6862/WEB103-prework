import react from "react";
import { supabase } from "../client";
// import { useParams } from "react-router-dom";

const Card = ({name, url, description, imageURL}) => {
    // Here, we are fetching the data for the creators
    // PROGRESS: started async, not finished 7/9
    const ensureHttp = (url) => {
        if (!/^https?:\/\//i.test(url)) // allows the url to work by inputting "https://"" in front of it if it DOESN'T have one
            return 'https://' + url;
        return url;
    }

    return (
        <div className="p-6 rounded-xl border-sky-500 border-2">
            <p>Name: {name}</p>
            <a href={ensureHttp(url)} target="_blank" rel="noopener noreferrer">URL: {url}</a> {/*for some reason, we need "https://" for the link to work */}
            <p>Description: {description}</p>
            <img src={imageURL} alt="Image: " className="w-20 h-20"></img> {/*Note: img must not have ANYTHING between the closing mark, or must be self-closing */}
        </div>
    )
}

export default Card;