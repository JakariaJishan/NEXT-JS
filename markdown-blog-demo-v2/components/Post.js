import Link from 'next/link';
import React from 'react';

const Post = ({item}) => {
    return (
        <div>
            <h1>{item.data.title}</h1>
            <small>{item.data.body}</small>
            <Link href={'/posts/'+item.slug}>
                <button>Read More</button>
            </Link>
        </div>
    );
};

export default Post;