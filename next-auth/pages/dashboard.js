import { getSession, signIn } from "next-auth/react";
import React, { useEffect, useState } from "react";
const Dashboard = () => {
    const [loading, setLoading] = useState(true)
  useEffect(() => {
    const myFunction = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      }else {
          setLoading(false);
      }
    };
    myFunction();
  }, []);
  return <div>
      {
          loading? <h1>loading</h1> : <h1>dashboard page</h1>
      }
  </div>;
};

export default Dashboard;
