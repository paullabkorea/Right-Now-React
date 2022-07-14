import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import UserContext from "../../../context/UserContext"
import imgFacebook from "../../../assets/Facebook.svg";
import imgTwitter from "../../../assets/Twitter.svg";
import imgInstagram from "../../../assets/Instagram.svg";
import imgGitHub from "../../../assets/Github.svg";
import "./about.css";

export default function About() {
  const { userId } = useContext(UserContext)
  const [userData, setUserData] = useState()

  const snsImage = {
    imgFacebook, 
    imgTwitter, 
    imgInstagram, 
    imgGitHub
  }

  useEffect(()=>{
    axios
      .get(`http://localhost:3001/users/${userId}`)
      .then((json) => {
        setUserData(json.data)
      })
  }, [])
  console.log(userData)
  return (
    <>
    {userData !== undefined ? (
    <aside className="about">
      <h2>About Me</h2>
      <img src={userData.profileImg} alt="" className="user-profile" />
      <p className="user-name">{userData.name}</p>
      <p className="user-description">{userData.userInfo}</p>
      <h3>Categories</h3>
      <ul className="categories">
        {userData.category.map((c, index) => 
          <li key={index}><Link to="#">{c}</Link></li>
        )}
      </ul>
      <h3>Follow</h3>
      <ul className="sns">
        {Object.keys(userData.sns).map((s, index) =>
          <li key={index}>
            <Link to="">
              <img src={snsImage['img' + s]} alt={s} />
            </Link>
          </li>
        )}
      </ul>
    </aside>
    ) : <></>}
    </>
  )
}
