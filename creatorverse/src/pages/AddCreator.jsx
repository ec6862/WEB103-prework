import React, { useEffect, useState } from "react";
import { supabase } from "../client";


const AddCreator = () => {
    const addNewCreator = async (event) => {
        event.preventDefault();
        const { data, error } = await supabase.from("creators");
    }


    return (
        <div>
            <form>
                <label>Name</label>
                <input 
                    type="text" 
                    placeholder="Name"
                />
                <label>url</label>
                <input
                    type="text"
                    placeholder="url"
                />
                <label>description</label>
                <input 
                    type="text" 
                    placeholder="description"
                />
                <label>imageURL</label>
                <input
                    type="text"
                    placeholder="imageURL"
                />
            </form>
        </div>
    );
};

export default AddCreator;