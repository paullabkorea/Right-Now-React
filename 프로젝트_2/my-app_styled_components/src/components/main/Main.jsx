import { useEffect, useState, useContext } from "react"
import axios from "axios"
import UserContext from "../../context/UserContext"
import About from "./about/About"
import Posts from "./posts/Posts"
import "./main.css"

export default function Main() {
  const { isLogin } = useContext(UserContext)
  const [posts, setPosts] = useState()

  useEffect(()=>{
    axios
      .get("http://localhost:3001/posts")
      .then((json) => {
        setPosts(json.data)
      })
  }, [])
  // console.log(posts)
  return (
    <main>
      {posts !== undefined ? (
        <div className="max-width">
          <h2 className="a11y-hidden">Post</h2>
          <ul className="posts">
            <Posts posts={posts}/>
          </ul>
          {isLogin ? <About/> : <></>}
        </div>
      ) : null}
    </main>
  )
}
