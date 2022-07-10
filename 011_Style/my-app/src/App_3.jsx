import styled from "styled-components"

const ContentDiv = styled.div`
    margin: 40px;
    border: 1px solid black;
`

const ContentH2 = styled.h2`
    color: ${({name})=>(name === 'hello'?'red':'black')};
    width: 200px;
    margin: 0 auto;
    text-align: center;
`

function App() {
  return (
    <ContentDiv>
      <ContentH2 name='hello!'>Q&A</ContentH2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nam molestias quos quo nobis labore eveniet voluptatibus, sint magnam doloribus. Voluptate voluptates reprehenderit animi. Optio placeat consectetur quaerat asperiores sapiente.</p>
    </ContentDiv>
  );
}

export default App;