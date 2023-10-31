import Image from "next/image";
import { useState } from "react";
import Toggle from "./toggle";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type EditProps = {
    id : string
    name : string
    avatar : string
    title : string
    comments? : {
        id: string
        userId : string
        postId : string
    }[]
}
export default function EditPost({id, name, avatar, title, comments} : EditProps){
    const [toggle, setToggle] = useState(false);

    const {mutate} = useMutation(async(id : string) => await axios.delete("/api/deletePost", {data : id}));

    const deletePost = () => {
        mutate(id);
    }
    return(
        <>
        <div className="my-8 p-8 bg-white rounded-lg">
            <div className="flex items-center gap-2">
                <Image src={avatar} width={30} height={30} alt="this is user pic" className="rounded-full"/>
                <h3 className="text-bold text-gray-700">{name}</h3>
            </div>
            <div className="my-8 p-8 bg-gray-200">
                <p className="break-all">{title}</p>
            </div>
            <div className="my-8 flex items-center gap-4">
                <h3 className="text-sm">{comments?.length} Comments </h3>
                <button onClick={(e) => setToggle(true)} className="font-bold text-red-500 text-sm">Delete</button>
            </div>
        </div>
        {toggle && <Toggle deletePost={deletePost} setToggle={setToggle} /> }
        </>
   
    )
}