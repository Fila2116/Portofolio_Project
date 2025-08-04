import {useState} from 'react'

const BASE_URL = "https://jsonplaceholder.typicode.com";

interface Post {
    id:number;
    title:string;
}

export default function Demo() {
    const [posts,setPosts] = useState<Post>[]>([]);

    return (
        <div className='tutorial' >
            <h1 ></h1>
        </div>
    )
}