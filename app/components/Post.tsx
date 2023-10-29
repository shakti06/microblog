import Image from "next/image";
import Link from "next/link";

export default function Post({name, avatar, title} :{name : string, avatar:string, title : string}){
    return(
        <div className="my-8 p-8 bg-white rounded-lg">
            <div className="flex items-center gap-2">
                <Image height={30} width={30} src={avatar} className="rounded-full" alt="avatar"/>
                <h3 className="font-bold text-gray-700">{name}</h3>
            </div>
            <div className="my-8">
                <p className="break-all">{title}</p>
            </div>
            <div>
                <p className="text-bold text-gray-700">Comments</p>
            </div>
        </div>
    );
}