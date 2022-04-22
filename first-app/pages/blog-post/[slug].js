import { useRouter } from 'next/router';
import React from 'react';

const BlogPost = () => {
    const router = useRouter();
    const {slug} = router.query;
    return (
        <div>
            {slug}
        </div>
    );
};

export default BlogPost;