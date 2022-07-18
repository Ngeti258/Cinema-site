import  Joi  from 'joi-browser';
import React from 'react'
import Form from './common/form';


class LoginForm extends Form { 
    state={
        data:{username:'',password:''},
        errors:{ }
    }
    schema={
        username:Joi.string().required().label('Username'),
        password:Joi.string().required().label('Password')
    }  
    doSubmit=()=>{
        console.log('submitted');
    }
   

    
    
    render() { 
        return <div>
            <h1>login</h1>
            <orm onSubmit={this.handleSubmit}>
               {this.renderInput('username','Username')}
               {this.renderInput('password','Password','password')}                
               {this.renderButton('Login')}
            </orm>
        </div>;
    }

}
export default LoginForm;