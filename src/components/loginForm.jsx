import React, { Component } from 'react'

class LoginForm extends Component {
    render() { 
        return <div>
            <h1>login</h1>
            <form action="">
                <div className="form-group"><label htmlFor=""></label><input type="text" className="form-control" /></div>

                <div className="form-group"><label htmlFor=""></label><input type="text" className="form-control" /></div>
            </form>
        </div>;
    }
}
 
export default LoginForm;