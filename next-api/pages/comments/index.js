import React, { useState } from "react";
const Commnets = () => {
  const [user, setData] = useState([]);
  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/api/comments");
    const data = await res.json();
    setData(data);
  };
  console.log(user)
  return (
    <div>
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
