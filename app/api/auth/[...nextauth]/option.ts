import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "../../../../prisma/prisma";

export const authOptions: NextAuthOptions = {
    adapter:PrismaAdapter(prisma),
    secret:process.env.NEXTAUTH_SECRET,
    providers:[
        GoogleProvider({
            clientId :process.env.GOOGLE_CLIENT_ID as string ,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET as string
        })
    ]
}