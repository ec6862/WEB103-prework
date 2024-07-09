import React, { useEffect, useState } from "react";
import { supabase } from "../client";


const AddCreator = () => {
    const addNewCreator = async (event) => {
        event.preventDefault();
        const { data, error } = await supabase.from("creatorverse");
    }


    return (
        <div>
            <form>
                <input 
                    type="text" 
                    placeholder="Name"
                />
            </form>
        </div>
    );
};

export default AddCreator;