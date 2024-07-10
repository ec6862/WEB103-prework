import React, { useEffect, useState} from 'react';
import { supabase } from '../client';
import { useParams } from 'react-router-dom';

const ShowCreators = () => {
    let params = useParams();

    const [list, setList] = useState([]);
    const index = parseInt(params.symbol, 10);

    useEffect(() => {
        const getData = async () => {
            const { data, error } = await supabase
            .from("creators")
            .select("*")
            .eq("id", index);

            setList(data);
            if (error)
                console.error("Error fetching post data: ", error.message);
        }
        
        getData();
    })
    return (
        <div>

        </div>
    )
}

export default ShowCreators;