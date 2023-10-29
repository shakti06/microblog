export type AuthPost = {
    id : string
    name : string
    image : string
    email : string
    posts : {
        id : string
        createdAt : string
        title : string
        comments?: {
            id : string
            title : string
            createdAt : string
            userId : string
            postId : string
        }[]
    }[]
}