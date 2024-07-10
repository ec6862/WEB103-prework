import React, { useEffect, useState } from "react";
import { supabase } from "../client";


const AddCreator = () => {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");

    const addNewCreator = async (event) => {
        event.preventDefault();
        const { data, error } = await supabase.from("creators").insert({name: name, url: url, description: description, imageURL: imageURL}).select();
        console.log(data, error);
    }

    return (
        <div>
            <form>
                <label>Name</label>
                <input 
                    type="text" 
                    placeholder="Name"
                    onChange={(event) => setName(event.target.value)}
                />
                <label>url</label>
                <input
                    type="text"
                    placeholder="url"
                    onChange={(event) => setUrl(event.target.value)}
                />
                <label>description</label>
                <input 
                    type="text" 
                    placeholder="description"
                    onChange={(event) => setDescription(event.target.value)}
                />
                <label>imageURL</label>
                <input
                    type="text"
                    placeholder="imageURL"
                    onChange={(event) => setImageURL(event.target.value)}
                />
            </form>
            <button onClick={addNewCreator}>Submit</button>
        </div>
    );
};

export default AddCreator;