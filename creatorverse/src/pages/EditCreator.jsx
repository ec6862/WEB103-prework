import React, { useState, useEffect } from "react";
import { supabase } from "../client"
import { useParams } from "react-router-dom";

const EditCreator = () => {
    const params = useParams(); // for edit data, we might ahve to use props to get the accurate rather than symbol (7/13)
    const index = parseInt(params.symbol, 10);
    const [list, setList] = useState([]);
    const [name, setName] = useState("");
    const [url, setURL] = useState("");

    const editPost = async (event) => {
        event.preventDefault();

        const { data, error } = await supabase
        .from("creators")
        .update({name: name})
        .eq("id", index)
        .select();

        if (data) {
            console.log("Post updated successfully:", data);
        } else if (error) {
            console.error("Error updating post:", error.message);
        }
    }

    const deletePost = () => {

    }

    useEffect(() => {
        const getData = async () => {
            const { data, error } = await supabase
            .from("creators")
            .select("*")
            .eq("id", index);
            if (error)
                console.error("Error fetching post data: ", error.message);
            else
                setList(data);
        }
        getData();
    }, [index]);

    useEffect(() => {
        if (list.length > 0) {
            console.log("Name: ", list[0].name);
            console.log("URL: ", list[0].url);

            setName(list[0].name);
            setURL(list[0].url);
        }
    }, [list]);

    return (
        <div>
            EditCreator for {index}
            {
                list.length > 0 ? (
                    <div> 
                        <form>
                            <label>Name: </label>
                            <input
                                type="text"
                                placeholder="Type here..."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            /> <hr/>
                            <label>Url: </label>
                            <input
                                type="text"
                                placeholder="Type here..."
                                value={url}
                                onChange={(e) => setURL(e.target.value)}
                            /> <hr/>
                            <label>Description: </label>
                            <input
                                type="text"
                                placeholder="Type here..."
                                value={list[0].description}
                            /> <hr/>
                            <label>Image: </label>
                            <input
                                type="text"
                                placeholder="Type here..."
                                value={list[0].imageURL}
                            /> <hr/>
                        </form>
                    </div>
                ) : (
                    <div>
                        Not Available
                    </div>
                )
            }
            <button onClick={editPost}>Edit</button>
            <button onClick={deletePost}>Delete</button>
        </div>
    )
}

export default EditCreator;