import React, { Fragment } from 'react'
import './SideBar.css'
import GoogleLogin from '../GoogleLogin/GoogleLogin'
import { GoogleLogout } from 'react-google-login'
import { withRouter } from 'react-router-dom'

class SideBar extends React.Component{    

    loggedOut = () => {
        localStorage.removeItem('loggedInUser')
        this.props.history.replace('/')
    }

    render(){

        let login = null
        if(this.props.user!==null){
            const user = this.props.user.profileObj
            console.log(user)
            login = (
                <Fragment>
                    <img src={user.imageUrl} alt="Profile Picture" />
                    <h3>{user.email}</h3>
                    <p>{user.name}</p>
                    <GoogleLogout
                        clientId="955660620445-au82rh5r7sg96cpj1adflkprdg4hj7dv.apps.googleusercontent.com"
                        buttonText="Logout"
                        onLogoutSuccess={this.loggedOut}

                    />    
                </Fragment>
            )
        }else{
            this.props.history.replace('/')
        }
        return (
            <div className="Sidebar">           
                {login}
            </div>
        )
    }
}

export default withRouter(SideBar)

