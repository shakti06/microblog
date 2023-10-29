import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export  async function GET(request : Request){
    try {
        const response = await prisma.post.findMany({
            include : {
                user : true
            },
            orderBy : {
                createdAt : 'desc'
            }
        });
        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json(error);
    }
}