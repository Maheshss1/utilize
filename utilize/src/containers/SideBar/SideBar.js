import React, { Fragment } from 'react'
import './SideBar.css'
import GoogleLogin from '../GoogleLogin/GoogleLogin'

class SideBar extends React.Component{    

    render(){

        let login = <GoogleLogin login={this.props.login} />
        if(this.props.user!==null){
            const user = this.props.user.profileObj
            login = (
                <Fragment>
                    <img src={user.imageUrl} alt="Profile Picture" />
                    <h3>{user.email}</h3>
                    <p>{user.name}</p>
                </Fragment>
            )
        }
        return (
            <div className="Sidebar">           
            {login}
            </div>
        )
    }
}

export default SideBar

