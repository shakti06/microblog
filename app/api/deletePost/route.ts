import { NextResponse, type NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/option";
import prisma from "../../../prisma/prisma";

export  async function DELETE(req : Request, res : Response){
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ message: "Please signin to create a post." })
    }
         const postId = await req.json();
         console.log(req.body);
        try {
            const post = await prisma.post.delete({ where :{
                id : postId
            }});
           return NextResponse.json(post);
        } catch (error) {
            return NextResponse.json({message :' error posting the post'});
        }

}
