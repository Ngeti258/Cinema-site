import React from 'react'

const Input = ({name,label,value,onChange,error}) => {
    return ( 
        <div>
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input 
                onChange={onChange}
                id={name}
                name={name}
                value={value} 
                autoFocus 
                type='text'
                className="form-control" />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
            </div>
       
     );
    
}
 
export default Input;