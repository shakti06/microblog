import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/option";
import { redirect } from "next/navigation";
import MyPost from "./myPost";


export default async function Dashboard(){
    const session = await getServerSession(authOptions);
    if(!session){
        redirect("/api/auth/signin");
    }

    return(
        <main>
          <h1 className="font-bold text-2xl">Welcome Back {session?.user?.name}</h1>  
          <MyPost/>
        </main>
    );
}