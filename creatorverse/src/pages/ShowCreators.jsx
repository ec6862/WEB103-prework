import React, { useEffect, useState} from 'react';
import { supabase } from '../client';
import { useParams, Link } from 'react-router-dom';

// Next: display list in console or in main

const ShowCreators = () => {
    // let params = useParams();

    const [list, setList] = useState([]);
    // const index = parseInt(params.symbol, 10);
    // console.log("index", index);

    useEffect(() => {
        const getData = async () => {
            const { data, error } = await supabase
            .from("creators")
            .select("*");

            setList(data);
            if (error)
                console.error("Error fetching post data: ", error.message);
        }
        
        getData();
    }, []);

    return (
        <div>
            {
                list.map((post, i) =>
                    post.name != "" ? (    
                        <Link to={`/ViewCreator/${post.id}`} key={i}>
                            <p>Name: {post.name}</p>
                        </Link>
                    ) : <p>No post available</p>
                )
            }
        </div>
    )
}

export default ShowCreators;