import axios from 'axios'
import type { FC, MouseEventHandler } from 'react'
import {useNavigate} from 'react-router-dom'

const SignOut: FC = () => {
  const navigate = useNavigate()
  const handleSignout: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const logoutApi = "http://localhost:8000/api/v1/users/sign_out";
    axios.defaults.withCredentials = true;
    axios
    .post(logoutApi)
    .then(() => navigate("/"))
    .catch((error) => console.log(error));
  }
  return (
    <button onClick={handleSignout}>登出</button>
  )
}

export default SignOut
