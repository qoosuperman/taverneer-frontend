import "./App.css";

import axios from "axios";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface CurrentUserResponse {
  user: CurrentUser
}

interface CurrentUser {
  name: string
}

const App: FC = () => {
  const [loginString, setLoginString] = useState("正在確認中");

  const currentUserApi = "http://localhost:8000/api/v1/current_user";
  useEffect(() => {
    axios
      .get<CurrentUserResponse>(currentUserApi)
      .then((res) => setLoginString(res.user.name))
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
