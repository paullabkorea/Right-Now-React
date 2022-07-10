import { useState } from 'react';


function App() {
    const [like, setLike] = useState(false);
    let heart = like ? '💖' : ''
    
    function clickLike() {
        if (like){
            setLike(false)
        } else {
            setLike(true)
        }
        console.log(like)
    }

    return (
        <div>
            <button onClick={clickLike}>like</button> <span>{heart ? heart : ''}</span>
        </div>
    );
}

export default App;