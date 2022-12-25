import "./App.css";

import type { FC } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { apiCurrentUser } from "./api";

const App: FC = () => {
  const [userName, setUserName] = useState("");
  const [loginState, setLoginState] = useState("剛進入頁面");

  useEffect(() => {
    setLoginState("正在確認中")
    apiCurrentUser()
      .then((res) => {
        if (!!res.data.user) {
          setUserName(res.data.user.name);
        }
      })
      .catch((error) => setLoginState(error.message));
  }, []);

  return (
    <div className="App">
      Homepage
      <nav>
        {(typeof userName === 'string' && userName.trim() !== '') ? (
          <h3>名字： {userName}</h3>
        ) : (
          <h3>狀態： {loginState}</h3>
        )}
        <Link to="/sign_in">Sign In</Link> |{" "}
        <Link to="/sign_out">Sign Out</Link>
      </nav>
    </div>
  );
};

export default App;
