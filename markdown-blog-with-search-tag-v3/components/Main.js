import React from 'react';
// const fs = require('fs');
// const path = require('path');
const Main = (props) => {
    console.log(props)
    return (
        <div>

        </div>
    );
};

export default Main;

export async function getStaticProps(){
    // const files = fs.readdirSync(path.join("posts"))
    // console.log(files)
    return {
        props : {data: 'asdf'}
    }
}