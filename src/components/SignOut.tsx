import type { FC, MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

import { apiUserSignOut } from "../api";

const SignOut: FC = () => {
  const navigate = useNavigate();
  const handleSignout: MouseEventHandler<HTMLButtonElement> = (e) => {
    apiUserSignOut()
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };
  return <button onClick={handleSignout}>登出</button>;
};

export default SignOut;
