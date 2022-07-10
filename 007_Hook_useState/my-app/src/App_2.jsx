import React, { useState } from 'react';

const Parent = () => {
    const [ v, setV ] = useState({
        a: 101,
        b: 'hello',
        c: 'world'
    })

    return (
        <div>
        <Child one={v.a} two={v.b} three={v.c} onChange={value => {
            console.log('Parent')
            console.log(v)
            console.log(value)
            return setV({...v, ...value})
        }} />
        {v.id}
        </div>
    )
}

const Child = (props) => { 
    const [input, setInput] = useState();

    const handleonChange = (event) => {
        console.log(event)

        const {name, value} = event.target
        console.log(name, value)

        setInput({[name]: value})
        console.log(input)
        props.onChange(input)
    }
    return (
        <div>
            <p>{props.one}</p>
            <p>{props.two}</p>
            <p>{props.three}</p>
            <input type="text" name="id" onChange={handleonChange} />
        </div>
    )
}


function App() {
    return (
        <div>
            <Parent/>
        </div>
    );
}

export default App;