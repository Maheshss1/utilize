import React from 'react'
import './Order.css'

const order = (props) => {    
    const singleOrder = props.order

    return(
        <div className="order">     
            <button className="deleteButton" onClick={props.deleteOrder}>x</button>
            <div onClick={props.clicked}>
                <h3>{singleOrder.customer_name}</h3>
                <p>{singleOrder.customer_email}</p>
                <p>{singleOrder.product} : {singleOrder.quantity} Qty</p>
            </div>
        </div>
    )
}

export default order