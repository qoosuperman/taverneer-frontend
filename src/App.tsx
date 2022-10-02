import "./App.css";

import type { FC } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { apiCurrentUser } from "./api";

const App: FC = () => {
  const [loginString, setLoginString] = useState("正在確認中");

  useEffect(() => {
    apiCurrentUser()
      // @ts-expect-error: 先不管這裡
      .then((res) => setLoginString(res.data.user.name))
      .catch((error) => setLoginString(error.message));
  }, []);

  return (
    <div className="App">
      Homepage
      <nav>
        <h3>狀態： {loginString}</h3>
        <Link to="/sign_in">Sign In</Link> |{" "}
        <Link to="/sign_out">Sign Out</Link>
      </nav>
    </div>
  );
};

export default App;
