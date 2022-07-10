import './app.css'

function App() {
    // 주석입니다.
    // console.log('주석입니다.')
    const styleH2 = { border: 'solid 1px black', color: 'blue', fontSize: '32px' }
    return (
        <div>{/* 최상위태그는 하나만! */}
            <h1>hello world</h1>
            <h2 style={styleH2}>hello world</h2>
            <h2 style={{ border: 'solid 1px black', color: 'blue', fontSize: '32px' }}>hello world</h2>
            <p className='content'>hello world</p>
            {/*
            <p>hello world</p>
            <p>hello world</p>
            */}
        </div>
    )
}

export default App;