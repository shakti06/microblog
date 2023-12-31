"use client";
type toggleProps = {
    deletePost  : () => void
    setToggle  :(toggle : boolean) => void
}

export default function Toggle({deletePost, setToggle} : toggleProps){
    return(
        <div onClick ={(e) => setToggle(false)} className="fixed bg-black/50 w-full h-full z-20 left-0 top-0 ">
            <div className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 rounded-lg flex flex-col gap-6">
                <h2 className="text-bold text-sm">
                    Are you sure you want to delete the post ? 😥
                </h2>
                <button onClick ={deletePost} className="bg-red-500 font-bold text-white rounded-md py-2">
                    Delete
                </button>
            </div>
        </div>
    );
}