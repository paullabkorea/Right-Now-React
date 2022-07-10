import Privacy from "./Components/Privacy";
import Certificate from "./Components/Certificate";
import Career from "./Components/Career";
import Awards from "./Components/Awards";

function App() {
  return (
    <div className="App">
      <h1>이력서</h1>
      <Privacy 
        name='이호준' 
        phone='01000000000' 
        github='paullabkorea'
      />
      <Certificate 
        title='자격증'
        contents='자격증 내용'
      />
      <Certificate
        title='학력'
        contents='학력 내용'
      />
      <Career />
      <Awards />
    </div>
  );
}

export default App;