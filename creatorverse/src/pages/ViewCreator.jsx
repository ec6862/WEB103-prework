import React, { useState, useEffect } from "react";
import { supabase } from "../client"
import { useParams, useNavigate } from "react-router-dom";
import Card from "../components/Card";

const ViewCreator = () => {
    const params = useParams();
    const index = parseInt(params.symbol, 10);
    const navigate = useNavigate(); // note that navigate function is used here to teleport to the edit page instead of the typical <Link>
    const [list, setList] = useState([]);
    const [notification, setNotification] = useState("");

    const handleEditClicker = () => {
        navigate(`/edit/${index}`);
    }

    const deletePost = async (event) => {
        event.preventDefault();
        await supabase.from("creators").delete().eq("id", index);

        setNotification("Post deleted successfully!");
    }

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
            {
                list.length > 0 ? (
                    <div>
                        <Card 
                            name={list[0].name}
                            url={list[0].url}
                            description={list[0].description}
                            imageURL={list[0].imageURL}
                        />
                    </div>
                ) : (
                    <p>List is empty</p>
                )
            }
            <button onClick={handleEditClicker}>Edit</button>
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

export default ViewCreator;