import Router from 'next/router';
import React, { useState } from 'react';

const Sidebar = () => {
    const [search, setSearch] = useState('');
    const handleClick = () => {
        Router.push({
            pathname: '/search',
            query: {q: search.toLowerCase()},
        })
    }
    return (
        <div>
            <input type="text" onChange={e => setSearch(e.target.value)} />
            <input type="submit" onClick={handleClick} />
        </div>
    );
};

export default Sidebar;