import React from 'react'
import { Link } from 'react-router-dom'
import imgProfile from "../../../assets/profile.jpg"
import imgIconModifyWhite from "../../../assets/icon-modify-white.svg"
import imgiconLogout from "../../../assets/icon-logout.svg"

export default function Login() {
  return (
    <>
      <li className="profile-img">
        <Link to="#">
          <img src={imgProfile} alt="My Page" />
        </Link>
      </li>
      <li>
        <Link to="#" className="button">
          <img src={imgIconModifyWhite} alt="" />
          <span>Write</span>
        </Link>
      </li>
      <li>
        <button className="button white">
          <img src={imgiconLogout} alt="" />
          <span>Logout</span>
        </button>
      </li>
    </>
  )
}
