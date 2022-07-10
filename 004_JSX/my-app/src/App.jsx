function App() {
    const containerStyle = {
      'backgroundColor' : 'black', 
      'color' : 'white'
    }
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const date = today.getDate();
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();
    return (
      <div style={containerStyle} className="App">
        <p style={{'color':'red'}}>년 : {year}</p>
        <p>월/일 : {`${month} / ${date}`}</p>
        <p>시간 : {`${hour}:${min}:${sec}`}</p>
      </div>
    );
  }
  
  export default App;