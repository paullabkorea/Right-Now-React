import style from './app.module.css'
import Test from './Components/Test';

function App() {
    return (
      <div className="App">
        <div className={style.test}>Test 1</div>
        <Test/>
      </div>
    );
  }
  
  export default App;