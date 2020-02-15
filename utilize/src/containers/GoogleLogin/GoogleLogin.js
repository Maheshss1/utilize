import React from 'react'
import * as actions from '../../store/actions/LoginCreator'

import ReactGoogleLogin from 'react-google-login'

import './GoogleLogin.css'
import { connect } from 'react-redux'

class GoogleLogin extends React.Component{

    responseGoogle = (response) => {
        this.props.login(response)
        this.props.history.replace("/orders")
    }

    componentDidMount(){
        const user = localStorage.getItem("loggedInUser")
        if(user!==null)
            this.props.history.push('/orders')
        console.log("hii",user)
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

const mapDispatchToProps = dispatch => {
    return {
        login: (loginDetails)=>dispatch(actions.login(loginDetails))
    }
}

export default connect(null,mapDispatchToProps)(GoogleLogin)