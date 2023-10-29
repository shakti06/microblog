import { NextResponse, type NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/option";
import prisma from "../../../prisma/prisma";

export  async function POST(req : Request, res : Response){
    if(req.method === 'POST'){
        const session = await getServerSession(authOptions);
        if(!session){
            return NextResponse.json({message : 'please sign in'});
        }
        
        const uniqueUser = await prisma.user.findUnique({ where : {email :  session?.user?.email as string}});

        const title =   await req.json();

        if(title.length > 300){
            return NextResponse.json({message : 'please write a shortter post'});
        }
        if(!title.length){
            return NextResponse.json({message : 'please do not leave empty'});
        }

        try {
            const post = await prisma.post.create({ data : { title, userEmail : uniqueUser?.email as string }});
           return NextResponse.json(post);
        } catch (error) {
            return NextResponse.json({message :' error posting the post'});
        }
}
}

export async function GET(req : Request){
    return NextResponse.json({ message : 'hello'});
}
