import React, { useState } from "react";
const Commnets = () => {
  const [user, setData] = useState([]);
  const [comment, setComment] = useState('');
  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/api/comments");
    const data = await res.json();
    setData(data);
  };
  const handleUser = async () => {
      const res = await fetch("http://localhost:3000/api/comments",{
        method : 'POST',
        headers : { 'Content-Type' : 'application/json'},
        body : JSON.stringify({comment})
      });
      const data = await res.json();
  }
  return (
    <div>
        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="enter user" />
        <button onClick={handleUser}>add user</button>
      <button onClick={fetchData}>load data</button>
      {
          user.map(item => {
              return (
                  <h1 key={item.name}>{item.name} {item.title}</h1>
              )
          })
      }
    </div>
  );
};

export default Commnets;
