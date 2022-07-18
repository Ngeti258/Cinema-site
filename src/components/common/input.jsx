import React from 'react'

const Input = ({name,label,error,...rest}) => {
    return ( 
        <div>
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input 
                {...rest}
                name={name}               
                id={name}
                autoFocus 
                className="form-control" />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
            </div>
       
     );
    
}
 
export default Input;