import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { apiCurrentUser } from "../../api";
// import { apiCurrentUser } from "./api";
import styles from "./Header.module.css";

// 現在 header 不顯示 sign_in 的連結是因為不想讓一般用戶可以登入
// 想登入的話可以自己到 /sign_in 的路徑
const Header: FC = () => {
  const [userName, setUserName] = useState("");
  const [canEnterBackStage, setCanEnterBackStage] = useState(false);
  const [loginState, setLoginState] = useState("剛進入頁面");

  console.log(loginState);
  useEffect(() => {
    setLoginState("正在確認中");
    apiCurrentUser()
      .then((res) => {
        if (!!res.data.user) {
          setUserName(res.data.user.name);
          setCanEnterBackStage(res.data.user.is_admin);
          setLoginState("已登入");
        }
      })
      .catch((error) => setLoginState(error.message));
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div></div>
        <div>Taverneer</div>
        <div>
          {loginState === "已登入" ? <div>{userName}</div> : null}
          {loginState === "已登入" ? (
            <div>
              <Link to="/sign_out" className={styles.link}>
                Sign Out
              </Link>
            </div>
          ) : null}
          {canEnterBackStage && (
            <div>
              <Link to="/admin" className={styles.link}>
                去後台
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
