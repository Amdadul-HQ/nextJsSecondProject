import Link from 'next/link';
import React from 'react';

const getPosts = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}
export const metadata = {
    title: "Post",
    description: "Next Hero Post Page",
  };
const PostsPage =async () => {
    const posts = await getPosts()
    // console.log(posts);
    return (
        <section>
            <h1>Total Post : {posts.length}</h1>
            <div className='container mx-auto grid grid-cols-4 gap-5'>
                {
                    posts.map(post => <div className='p-4 flex flex-col justify-between border rounded-md' key={post.id}>
                        <h1 className='text-teal-500 text-xl font-medium'>Title: {post.title}</h1>
                        <hr />
                        <p className='text-lg text-gray-700'>Description: {post.body}</p>
                        <Link href={`/posts/${post.id}`}>
                        <button className='mt-2 bg-teal-500 text-white text-xl px-6 py-1 rounded-md hover:bg-teal-700 transition-all duration-300'>View Post</button>
                        </Link>
                    </div>)
                }
            </div>
        </section>
    );
};

export default PostsPage;