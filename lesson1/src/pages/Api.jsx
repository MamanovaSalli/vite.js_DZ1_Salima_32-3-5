import {useState, useEffect} from "react";


const Api = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const get = async () => {
            const response = await fetch('https://dummyjson.com/posts')
            const data = await response.json();
            setPosts(data.posts)


        }
        get()
    }, [])

    return (
        <div>Api
            <span>Post</span>
            <ul>{posts && posts.map((post) => <li> {post.title} </li>)}</ul>
        </div>
    )
}
export default Api