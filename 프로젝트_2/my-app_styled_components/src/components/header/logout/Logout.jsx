import { Link } from "react-router-dom"
import imgIconLogin from "../../../assets/icon-login.svg"
import imgIconLogout from "../../../assets/icon-register.svg"

export default function logout() {
  return (
    <>
        <li>
            <Link to="#" className="button gray">
                <img src={imgIconLogin} alt="" />
                <span>Login</span>
            </Link>
        </li>
        <li className="only-pc">
            <Link to="#" className="button gray">
                <img src={imgIconLogout} alt="" />
                <span>Register</span>
            </Link>
        </li>
    </>
  )
}
