import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import Account from "../components/account";
import Logout from "../components/logout";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <Logout handleLogout={() => setIsLoggedIn(false)} />
      ) : (
        <Account handleLogin={() => setIsLoggedIn(true)} />
      )}
    </>
  );
}

export default Home;
