import React from 'react'
import Orders from '../../components/Orders/Orders'
import * as actions from '../../store/actions/OrderCreator'
import { connect } from 'react-redux'

import './MainPage.css'
import GoogleLogin from '../GoogleLogin/GoogleLogin'

class Mainpage extends React.Component{

    // ordersCount = 30;

    componentDidMount(){
        this.props.fetchOrders(this.ordersCount)
        // document.addEventListener('scroll', this.scrollingToBottom)
    }

    // scrollingToBottom= () => {
    //     const element = document.getElementById('orders')
        
    //     if(element!==null && element.getBoundingClientRect().bottom <= window.innerHeight){
    //         this.ordersCount+=30
    //         console.log(this.ordersCount)
    //         this.props.fetchOrders(this.ordersCount)
    //     }
    // }

    handleClick = (id) => {
        this.props.getOrder(id)
    }

    deleteOrder = (id) => {
        this.props.deleteOrder(id)
    }

    render(){
        return(
            <div className="MainPage">      
                <Orders orders={this.props.orders} getOrder={this.handleClick} deleteOrder={this.deleteOrder} />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        orders: state.orders,
        editedOrder: state.editedOrder
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: (count)=>dispatch(actions.fetchingOrders(count)),
        getOrder: (id)=>dispatch(actions.getOrder(id)),
        deleteOrder: (id)=>dispatch(actions.deleteOrder(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Mainpage)