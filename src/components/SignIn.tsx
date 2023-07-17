import type { FC, MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

import { apiUserSignIn } from "../api";
import styles from "./SignIn.module.css"

type Form = EventTarget & {
  email: { value: string };
  password: { value: string };
};

const SignIn: FC = () => {
  const navigate = useNavigate();
  const handleSignIn: MouseEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const email = (e.target as Form).email.value;
    const password = (e.target as Form).password.value;

    apiUserSignIn({ user: { email, password } })
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };

  return (
    <form method="POST" onSubmit={handleSignIn}>
      <label htmlFor="email">信箱</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="password">密碼</label>
      <input type="password" id="password" name="password" />
      <button className={styles.link_button}>送出</button>
    </form>
  );
};

export default SignIn;
