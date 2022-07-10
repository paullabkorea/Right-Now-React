import { useState } from "react";

let user = {
  login: false,
  id: 'hojun@weniv.com',
  nickname: 'jun'
}

function Homepage(){
  return (
    <div>
      <h1>홈페이지에 오신 것을 환영합니다.</h1>
      <button>로그아웃</button>
    </div>
  )
}
function Login(){
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    if(id === ''){
      alert('아이디를 입력하지 않았습니다.')
    }
    if(pw === ''){
      alert('패스워드를 입력하지 않았습니다.')
    }
    // alert(`id : ${id}, pw : ${pw}`);
    alert('로그인 되었습니다!')
    user['login'] = true
  };

  const handleLoginInput = (e) => {
    console.log("id", e.target.value);
    setId(e.target.value)
  };

  const handlePasswordInput = (e) => {
    console.log("pw", e.target.value);
    setPw(e.target.value)
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디 : <input type="text" onChange={handleLoginInput} />
      </label>
      <br/>
      <label>
        비밀번호 :
        <input type="password" onChange={handlePasswordInput} />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}

function App() {
  return (
    <div>
      {user.login?<Homepage/>:<Login/>}
    </div>
  )
}

export default App;