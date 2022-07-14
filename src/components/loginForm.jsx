import React, { Component } from 'react'

class LoginForm extends Component { 
    handleSubmit=e=>{
        
        e.preventDefault();
        const username=this.username.current.value;
        console.log('submitted');
    }
    handleChange=({currentTarget:input})=>{
        const account = {...this.state.account}
        account[input.name] =input.value;
        this.setState({account})

    }
    render() { 
        const {account}=this.state
        return <div>
            <h1>login</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                <label htmlFor="username">UserName</label>
                <input 
                onChange={this.handleChange}
                name='username'
                value={account.username} 
                autoFocus 
                ref={this.username} id="username" 
                className="form-control" />
                </div>

                <div className="form-group"><label htmlFor="password">Password</label>
                <input id="password"
                name='password'
                value={account.password}  
                className="form-control" /></div>
                <button className="btn btn-primary">Login</button>
            </form>
        </div>;
    }
}
 
export default LoginForm;