import React, { useState, useEffect } from "react";
import { supabase } from "../client"
import { useParams } from "react-router-dom";

const EditCreator = () => {
    const params = useParams(); // for edit data, we might ahve to use props to get the accurate rather than symbol (7/13)
    const index = parseInt(params.symbol, 10);
    const [list, setList] = useState([]);

    useEffect(() => {
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
            console.log("Symbol: ", index);
        }
    }, [list]);

    return (
        <div>
            EditCreator for {index}
            <form>
                <label>Name: </label>
                <input
                    type="text"
                    placeholder="Type here.."
                    value={list[0].name}
                />
            </form>

        </div>
    )
}

export default EditCreator;