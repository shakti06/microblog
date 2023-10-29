"use client";

import {signIn} from "next-auth/react";

export default function Login(){
    return(
        <li className="list-none">
            <button  className="text-sm text-white bg-gray-700 rounded-xl py-2 px-6" onClick = {()=> signIn()}>SignIn</button>
        </li>
    )
}