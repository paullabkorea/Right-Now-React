import {useState} from 'react'

function Resume(props) {
  const [like, setLike] = useState(0);

  function clickLike() {
      setLike(like + 'world') // like = like + 1
      console.log(like);
  }
  return(
      <div>
          <h1>{props.name} 자기소개서</h1>
          <button onClick={clickLike}>like {like}</button>
      </div>
  )
}

function App() {
  return (
    <div className="App">
      <Resume name='이호준'/>
    </div>
  )
}

export default App;

