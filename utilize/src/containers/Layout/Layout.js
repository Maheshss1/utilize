import React, { Fragment } from 'react'
import Mainpage from '../MainPage/MainPage'
import SideBar from '../SideBar/SideBar'
import AddOrEditOrder from '../AddOrEditOrder/AddOrEditOrder'
import { connect } from 'react-redux'

import './Layout.css'

import * as actions from '../../store/actions/LoginCreator'
import GoogleLogin from '../GoogleLogin/GoogleLogin'

class Layout extends React.Component{

    

    render() {

        let layout = <GoogleLogin login={this.props.login} />
        const user = JSON.parse(localStorage.getItem('loggedInUser'))
        console.log(user)
        if(user!==null)
        layout = 
            <Fragment>
                <nav>Your Orders</nav>
                <SideBar user={user} login={this.props.login} />
                <Mainpage />
                <AddOrEditOrder />
            </Fragment>
        return (
            <div className="LayoutContainer">
                {layout}
                {/*                 <GoogleLogin /> */}
                {/* <SideBar user={this.props.loggedInUser} login={this.props.login} />
                <Mainpage />
                <AddOrEditOrder /> */}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (loginDetails)=>dispatch(actions.login(loginDetails))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout)