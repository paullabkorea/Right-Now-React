import { Link } from "react-router-dom"
import Author from '../author/Author'
import Category from '../category/Category'
import { PostLink, PostImg, ContentsWrap, PostH3, PostDescription } from './PostsStyle'
// import "./posts.css"

export default function Posts({posts}) {
  return (
    <>
      {posts.map(post => 
              <li key={post.id}>
              <PostLink to={`/post/${post.id}`}>
                <article>
                  <PostImg src={post.thumbnail} alt="" />
                  <ContentsWrap>
                    <Category 
                      category={post.category}
                    />
                    <PostH3>{post.title}</PostH3>
                    <Author
                      userName={post.userName}
                      profileImg={post.profileImg}
                      created={post.created}
                    />
                    <PostDescription>
                      {post.contents[0].text}
                    </PostDescription>
                  </ContentsWrap>
                </article>
              </PostLink>
            </li>
            )}
    </>
  )
}
