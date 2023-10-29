"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Post from "./Post";
type PostType = {
    id: string
    title: string
    updatedAt?: string
    user: {
      email: string
      id: string
      image: string
      name: string
    }
    comments: {
      createdAt?: string
      id: string
      postId: string
      title: string
      userId: string
      user: {
        email: string
        id: string
        image: string
        name: string
      }
    }[]
  };


 const GetAllPost = () => {
    const getAllposts = async () =>{
        const response = await axios.get("/api/getPosts");
        return response.data;

      }
      const {data, error, isLoading} = useQuery<PostType[]>({queryFn : getAllposts, queryKey:['posts']});
      if(error){
      return error;
      }
  
      if(isLoading){
      return "loading ...";
      }
  

    return (
       <>
       {data?.map((post) => (
        <Post 
        key={post.id}
        name = {post.user.name}
        avatar ={post.user.image}
        title ={post.title}
        />
       ))}
       </>
    )
}

export default GetAllPost;