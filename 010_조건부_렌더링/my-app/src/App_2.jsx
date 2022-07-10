function App() {
  return (
    <div className="App">
      <Hello name='licat'/>
    </div>
  );
}

function Hello({name}){
  if(name){
    return (
      <One name={name}/>
    )
  } else {
    return <Two/>
  }
}

function One({name}){
  return (
    <div>
      <h1>Hello {name}!</h1>
    </div>
  )
}

function Two(){
  return (
    <div>
      <h1>이름을 입력하지 않았습니다!</h1>
    </div>
  )
}

export default App;