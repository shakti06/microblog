import { NextResponse, type NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/option";
import prisma from "../../../prisma/prisma";

export  async function GET(req : Request, res : Response){
    if(req.method === 'GET'){
        const session = await getServerSession(authOptions);
        if(!session){
            return NextResponse.json({message : 'please sign in'});
        }
        

        try {
            const data = await prisma.user.findUnique({
                 where : {
                    email :  session?.user?.email as string
                },
            include : {
                posts : {
                    orderBy : {
                        createdAt : "desc"
                    },
                    include : {
                        comments : true
                    }
                }
            }});
           
           return NextResponse.json(data);
        } catch (error) {
            return NextResponse.json({message :' error posting the post'});
        }
}
}
