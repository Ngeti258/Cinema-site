import React from 'react'

const Input = ({name,label,value,onchange}) => {
    return ( 
        <div>
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input 
                onChange={onchange}
                id={name}
                name={name}
                value={value} 
                autoFocus 
                type='text'
                className="form-control" />
            </div>
            </div>
       
     );
    
}
 
export default Input;