import React from 'react'
import ReactGoogleLogin from 'react-google-login'

import './GoogleLogin.css'

class GoogleLogin extends React.Component{

    responseGoogle = (response) => {
        this.props.login(response)
    }

    render(){
        return (
            <div className="GoogleLoginContainer">
                <ReactGoogleLogin
                    clientId="955660620445-au82rh5r7sg96cpj1adflkprdg4hj7dv.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }

}

export default GoogleLogin