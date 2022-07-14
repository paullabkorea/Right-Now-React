import { Link } from "react-router-dom"
import Author from '../author/Author'
import Category from '../category/Category'
import "./posts.css"

export default function Posts({posts}) {
  return (
    <>
      {posts.map(post => 
              <li key={post.id}>
              <Link to={`/post/${post.id}`} className="post">
                <article>
                  <img src={post.thumbnail} alt="" />
                  <div className="contents-wrap">
                    <Category 
                      category={post.category}
                    />
                    <h3>{post.title}</h3>
                    <Author
                      userName={post.userName}
                      profileImg={post.profileImg}
                      created={post.created}
                    />
                    <p className="post-description">
                      {post.contents[0].text}
                    </p>
                  </div>
                </article>
              </Link>
            </li>
            )}
    </>
  )
}
