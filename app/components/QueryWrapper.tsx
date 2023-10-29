"use client";
 import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
 import { Toaster } from "react-hot-toast";

 export default function QueryWrapper({children} : {children:React.ReactNode }){
    const queryClient = new QueryClient();
    return(
        <QueryClientProvider client={queryClient}>
            <Toaster/>
            {children}
        </QueryClientProvider>
    );
 }