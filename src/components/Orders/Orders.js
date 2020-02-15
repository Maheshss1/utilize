import React from 'react'
import Order from './Order/Order'

import './Orders.css'

const orders = (props) => {
    let allOrders;
    if(props.orders!==null)
    allOrders = props.orders.map((value,index)=>{        
        return <Order key={value.id} order={value} clicked={()=>props.getOrder(value.id)} deleteOrder={()=>props.deleteOrder(value.id)} />
    })

    return <div className="orders" id="orders">{allOrders}</div>
}

export default orders