import React, { useState, useEffect } from "react";
import { supabase } from "../client"
import { useParams } from "react-router-dom";

const EditCreator = () => {
    const params = useParams(); // for edit data, we might ahve to use props to get the accurate rather than symbol (7/13)
    const index = parseInt(params.symbol, 10);
    const [list, setList] = useState([]);
    const [name, updateName] = useState("");
    const [url, updateURL] = useState("");
    const [description, updateDescription] = useState("");
    const [imageURL, updateImageURL] = useState("");
    const [notification, setNotification] = useState("");

    const editPost = async (event) => {
        event.preventDefault();

        const { data, error } = await supabase
        .from("creators")
        .update({name: name, url: url, description: description, imageURL: imageURL})
        .eq("id", index)
        .select();

        if (data) {
            console.log("Post updated successfully:", data);
            setNotification("Post updated successfully!");
        } else if (error) {
            console.error("Error updating post:", error.message);
        }
    }

    const deletePost = async (event) => {
        event.preventDefault();
        await supabase.from("creators").delete().eq("id", index);

        setNotification("Post deleted successfully!");
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
            console.log("Description: ", list[0].description);
            console.log("Image: ", list[0].imageURL);

            updateName(list[0].name);
            updateURL(list[0].url);
            updateDescription(list[0].description);
            updateImageURL(list[0].imageURL);
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
                                onChange={(e) => updateName(e.target.value)}
                            /> <hr/>
                            <label>Url: </label>
                            <input
                                type="text"
                                placeholder="Type here..."
                                value={url}
                                onChange={(e) => updateURL(e.target.value)}
                            /> <hr/>
                            <label>Description: </label>
                            <input
                                type="text"
                                placeholder="Type here..."
                                value={description}
                                onChange={(e) => updateDescription(e.target.value)}
                            /> <hr/>
                            <label>Image: </label>
                            <input
                                type="text"
                                placeholder="Type here..."
                                value={imageURL}
                                onChange={(e) => updateImageURL(e.target.value)}
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
            {
                notification != "" ? (
                    <div>
                        {notification}
                    </div>
                ) : (
                    <div> 

                    </div>
                )
            }
        </div>
    )
}

export default EditCreator;