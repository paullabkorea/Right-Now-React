function App() {
  function handleClickEvent(){
    console.log('click1')
  }
  return (
    <div className="App">
      <h1 onClick={handleClickEvent}>test 1</h1>
      <h1 onClick={()=>{console.log('click2')}}>test 2</h1>
    </div>
  );
}

export default App;