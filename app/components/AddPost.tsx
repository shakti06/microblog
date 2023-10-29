"use client";

import axios, { AxiosError } from "axios";
import { useState } from "react"
import { useMutation, QueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";


export default function AddPost(){
    const [title, setTitle] = useState("");
    const [disabled, setDisabled] = useState(false);

    const {mutate} = useMutation(async(title : string) => await axios.post("/api/post/", JSON.stringify(title), {
        headers : {
            'Content-Type' : 'application/json'
        }
    }), 
    {
        onError:(error) => {
            if(error instanceof AxiosError){
                toast.error('fail to make post');
            }
            setDisabled(false);
        },
        onSuccess :(data) =>{
            console.log(data);
            toast.success('Post has been made');
            setTitle('');
            setDisabled(false);
        }
    });


    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault();
        setDisabled(true);
        mutate(title);
    }
 
    return(
        <form  onSubmit={handleSubmit} className="bg-white my-8 p-8 rounded-md">
            <div className="flex flex-col my-4">
                <textarea  className="p-4 rounded-md my-2 bg-gray-200 text-lg" name="title" placeholder="Enter your post here ..." value={title} onChange={(e) => setTitle(e.target.value)}></textarea>
            </div>
            <div className="flex items-center justify-between">
                <p className={`font-bold text-sm ${title.length > 300 ? "text-red-700" : "text-gray-600"}`}>{`${title.length}/300`}</p>
                <button type="submit" className="text-white px-6 rounded-md bg-teal-600 py-2" disabled={disabled}>Create Post</button>
            </div>
        </form>
    )
}