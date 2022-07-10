import React, { useState } from 'react';

function InputComponent() {
    const [value, setValue] = useState('');
    function onChange(e) {
        setValue(e.target.value);
    }
    return (
        <>
	        <input type="text" onChange={onChange}/>
	        <div>
		        {value}
	        </div>
        </>
    )
}

export default InputComponent;