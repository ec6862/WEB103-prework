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
    }, [index]);

    useEffect(() => {
        if (list.length > 0) {
            console.log("List name: ", list[0].name)
            console.log("List data: ", list);
        }
    }, [list]) // 7/15 stopped here: Working on why we cannot print list[0].name
    // Started working on this because we are trying to import Card into this function-

    return (
        <div>
            <>
                {/* <p key={i}>Name: {post.name}</p>
                <p>URL: {post.url}</p>
                <p>Description: {post.description}</p>
                <p>Image: {post.imageURL}</p> */}
                {/* <Card value = {list[0].name} key={i}/> */}
                <Card name = {list[0].name} url={list[0].url} description={list[0].description} imageURL={list[0].imageURL}/>
            </>
        </div>
    )
}

export default ViewCreator;