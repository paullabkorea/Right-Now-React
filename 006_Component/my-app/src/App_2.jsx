function 개인정보(){
  return (
    <section>
        <h2>개인정보</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eligendi minus obcaecati rerum consequuntur molestias dolore dicta ipsa sint! Nobis quis corporis, quae accusamus obcaecati illo ab cum nulla quia.</p>
    </section>
  )
}

function 자격증(){
  return (
<section>
        <h2>자격증</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eligendi minus obcaecati rerum consequuntur molestias dolore dicta ipsa sint! Nobis quis corporis, quae accusamus obcaecati illo ab cum nulla quia.</p>
      </section>
  )
}

function 학력(){
  return (
    <section>
    <h2>학력</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eligendi minus obcaecati rerum consequuntur molestias dolore dicta ipsa sint! Nobis quis corporis, quae accusamus obcaecati illo ab cum nulla quia.</p>
  </section>
  )
}

function 경력(){
  return (
    <section>
        <h2>경력</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eligendi minus obcaecati rerum consequuntur molestias dolore dicta ipsa sint! Nobis quis corporis, quae accusamus obcaecati illo ab cum nulla quia.</p>
      </section>
    )
}

function 수상경력(){
  return (
    <section>
        <h2>수상경력</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eligendi minus obcaecati rerum consequuntur molestias dolore dicta ipsa sint! Nobis quis corporis, quae accusamus obcaecati illo ab cum nulla quia.</p>
      </section>
  )
}

function App() {
  return (
    <div className="App">
      <h1>이력서</h1>
      <개인정보/>
      <자격증/>
      <학력/>
      <경력/>
      <수상경력/>
    </div>
  );
}

export default App;