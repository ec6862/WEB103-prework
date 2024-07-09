import react from "react";
import { supabase } from "../client";

const Card = () => {
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