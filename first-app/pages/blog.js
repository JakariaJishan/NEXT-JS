import React, { useEffect, useState } from 'react';
const Blog = () => {
    const [blogData, setBlogData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/blog')
        .then(res => res.json())
        .then((data) =>{
            setBlogData(Object.keys(data));
        })
    }, [])
    console.log( blogData);
    return (
        <div>
            {/* {
                blogData.map(elem => {
                    <h1>{elem.title}</h1>
                })
            } */}
        </div>
    );
};

export default Blog;