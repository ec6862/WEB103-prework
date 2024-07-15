import React, { useState, useEffect } from "react";
import { supabase } from "../client"
import { useParams, Link } from "react-router-dom";
import Card from "../components/Card";

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
                        <>
                            <p key={i}>Name: {post.name}</p>
                            <p>URL: {post.url}</p>
                            <p>Description: {post.description}</p>
                            <p>Image: {post.imageURL}</p>
                        </>
                    ) : <p>No post available</p>
                )
            }
        </div>
    )
}

export default ViewCreator;