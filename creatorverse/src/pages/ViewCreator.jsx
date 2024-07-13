import React, { useState, useEffect } from "react";
import { supabase } from "../client"

const ViewCreator = () => {
    const params = useParams();
    const index = parseInt(params.symbol, 10);
    const [list, setList] = useState([]);
    useEffect(()  => {
        const getData = async () => {
            const { data, error } = await supabase
            .from("creators")
            .select("*");
            setList(data);
        }    
    }, [])
    return (
        <div>

        </div>
    )
}

export default ViewCreator;