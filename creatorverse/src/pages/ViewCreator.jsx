import React, { useState, useEffect } from "react";
import { supabase } from "../client"
import { useParams, Link } from "react-router-dom";

const ViewCreator = () => {
    const params = useParams();
    const index = parseInt(params.symbol, 10);
    const [list, setList] = useState([]);
    useEffect(()  => {
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
    }, [])
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

export default ViewCreator;