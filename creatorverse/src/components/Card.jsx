import react from "react";
import { supabase } from "../client";
import { useParams } from "react-router-dom";

const Card = () => {
    let params =  useParams();
    // Here, we are fetching the data for the creators
    // PROGRESS: started async, not finished 7/9
    const getInfo = async () => {
        const { data, error } = await supabase.from("creators").select();
        console.log(data);
    }

    return (
        <div>
            <h1>Card</h1>
        </div>
    )
}

export default Card;