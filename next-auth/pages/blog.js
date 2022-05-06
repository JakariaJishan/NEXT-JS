import { getSession } from 'next-auth/react';
import React from 'react';

const Blog = ({data}) => {
    return (
        <div>
            this is blog page {data}
        </div>
    );
};

export async function getServerSideProps(context) {
    // console.log(context)
    const session = await getSession(context);
    if(!session) {
        return {
            redirect:{
                destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
                permanent: false
            }
        }
    }
    return {
      props: {data: session? '100 blogs' : 'free blogs'}, // will be passed to the page component as props
    }
  }

export default Blog;