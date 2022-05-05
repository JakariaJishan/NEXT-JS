import React from 'react';

const About = () => {
    const x = process.env.GITHUB_ID
    return (
        <div>
            this is about {x}
        </div>
    );
};

export default About;