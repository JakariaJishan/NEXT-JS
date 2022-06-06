import React, { useState } from 'react';

const Sidebar = () => {
    const [search, setSearch] = useState('');
    console.log(search)
    return (
        <div>
            <input type="text" onChange={e => setSearch(e.target.value)} />
            
        </div>
    );
};

export default Sidebar;