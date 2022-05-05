import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>about</Link>
            <Link href={'/dashboard'}>about</Link>
            <Link href={'/#'}>login</Link>
            <Link href={'/#'}>logout</Link>
        </div>
    );
};

export default Navbar;