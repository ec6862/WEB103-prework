import React, { useEffect, useState} from 'react';
import { supabase } from '../client';
import { useParams, Link } from 'react-router-dom';
import Card from "../components/Card";

// Next:

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
        <div className="border-2 rounded-lg border-sky-500 p-5">
            {
                list.map((post, i) =>
                    list.length > 0 ? (
                        <div key={i}> 
                            <Link to={`/ViewCreator/${post.id}`}>
                                <p>Name: {post.name}</p>
                            </Link>
                        </div>
                    ) : <p>No posts available</p>
                )
            }
        </div>
    )
}

export default ShowCreators;