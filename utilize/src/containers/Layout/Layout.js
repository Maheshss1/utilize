import React from 'react'
import Mainpage from '../MainPage/MainPage'
import SideBar from '../SideBar/SideBar'
import AddOrEditOrder from '../AddOrEditOrder/AddOrEditOrder'

import './Layout.css'


class Layout extends React.Component{    

    user = JSON.parse(localStorage.getItem('loggedInUser'))

    render() {    
        
        return (
            <div className="LayoutContainer">
                <nav>Your Orders</nav>
                <SideBar user={this.user} />
                <Mainpage />
                <AddOrEditOrder />
            </div>
        )
    }

}

export default Layout