import React from 'react';

const getPostDetails = async(id) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

const PostDetailsPage =async ({params}) => {
    const post = await getPostDetails(params.id)
    return (
        <section className='container mx-auto'>
            <h1 className='text-center text-2xl'>Post Details</h1>
            <h3 className='text-teal-400 text-xl'>Post Title: {post.title}</h3>
            <p className='text-lg text-black mt-4'>Post Description: {post.body}</p>
        </section>
    );
};

export default PostDetailsPage;