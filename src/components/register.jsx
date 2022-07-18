import React from 'react'
import Joi from 'joi-browser';
import Form from './common/form';

class RegisterForm extends Form {
    state = {  }
    schema={
        email:Joi.email().required().label('Username'),
        password:Joi.string().required().label('password'),
        name:Joi.string().required().label('name')
    }
    render() { 
        return (
            <div>
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
               {this.renderInput('username','Username')}
               {this.renderInput('password','Password','password')} 
               {this.renderInput('name','Name')}        
               {this.renderButton('Register')}
            </form>
            </div>
        );
    }
}
 
export default RegisterForm;