import type { FC, MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

import { apiUserSignIn } from "../api";

const SignIn: FC = () => {
  const navigate = useNavigate();
  const handleSignIn: MouseEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // @ts-expect-error: 先不管這裡
    const email = e.target.email.value;
    // @ts-expect-error: 先不管這裡
    const password = e.target.password.value;

    apiUserSignIn({ user: { email, password } })
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };

  return (
    <form method="POST" onSubmit={handleSignIn}>
      <label htmlFor="email">信箱</label>
      <input type="text" id="email" name="email" />
      <label htmlFor="password">密碼</label>
      <input type="text" id="password" name="password" />
      <button>送出</button>
    </form>
  );
};

export default SignIn;
