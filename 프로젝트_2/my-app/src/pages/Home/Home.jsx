import Header from "../../components/header/Header"
import Banner from "../../components/banner/Banner"
import Main from "../../components/main/Main"
import Footer from "../../components/footer/Footer"
import "./home.css"

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <Main/>
      <Footer/>
      {/* {posts.map(post => <h2 key={post.id}>{post.title}</h2>)} */}
    </>
  )
}
