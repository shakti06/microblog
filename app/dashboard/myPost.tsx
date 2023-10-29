"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getAllPost = async () => {
    const response = await axios.get("/api/getAuthPost");
    return response.data;
}

export default function MyPost(){
    const {data, isLoading} = useQuery({queryFn : getAllPost, queryKey:['posts']});
    if(isLoading) return <h1>loading ....</h1>
    console.log(data);
    return(
        <div className="my-8 p-8 bg-white">
            <div className="flex items-center gap-2">
                {/* <Image /> */}
                <h3>name</h3>
            </div>
        </div>
    );
}