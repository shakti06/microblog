import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/prisma";

export async function GET(req : Request){
    try {
        const post = await prisma.post.findMany();
        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json(error);
    }
}