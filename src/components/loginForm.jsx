import React, { Component } from 'react'

class LoginForm extends Component {
    username=React.createRef()

    // componentDidMount(){
    //     this.username.current.focus();
    // }
    handleSubmit=e=>{
        e.preventDefault();
        const username=this.username.current.value
        console.log('submitted');
    }
    render() { 
        return <div>
            <h1>login</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group"><label htmlFor="username">UserName</label>
                <input autoFocus ref={this.username} id="username" className="form-control" /></div>

                <div className="form-group"><label htmlFor="password">Password</label>
                <input id="password" className="form-control" /></div>
                <button className="btn btn-primary">Login</button>
            </form>
        </div>;
    }
}
 
export default LoginForm;