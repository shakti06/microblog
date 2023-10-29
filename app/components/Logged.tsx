"use client";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";

type UserImage ={
    image :string
}

export default function LoggedOut({image }: UserImage){
    return (
        <li className="flex gap-6 items-center">
            <button className="text-white rounded-xl bg-gray-700 py-2 px-6">Sign Out</button>
            <Link href={"/dashboard"}>
                <Image className = "rounded-full" width={64} height={64} src={image} alt="pic attribute for user"/>
            </Link>
        </li>
    )
}