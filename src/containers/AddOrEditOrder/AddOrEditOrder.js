import React from 'react'
import './AddOrEditOrder.css'
import * as actions from '../../store/actions/OrderCreator'
import { connect } from 'react-redux'

class AddOrEditOrder extends React.Component{

    state = {
        customer_name:'',
        customer_email:'',
        product:'Product 1',
        quantity:'',
        id:''
    }

    handleNameChange = (event) => {
        this.setState({
            customer_name:event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            customer_email:event.target.value
        })
    }

    handleProductChange = (event) => {
        this.setState({
            product:event.target.value
        })
    }

    handleQtyChange = (event) => {
        this.setState({
            quantity:event.target.value
        })
    }

    toggleAddEditOrder = (event) => {
        event.preventDefault()
        this.props.toggleEditing(0)
    }

    clearForm = (event) => {
        event.preventDefault()
        this.props.clearForm()
    }

    componentDidUpdate(){
        const order = this.props.editedOrder
        console.log(order)
        if(order.id===undefined ||  order.id===null) return
        if(order.id!==this.state.id)
            this.setState({
                ...order
            })
    }

    onSubmitForm = (event) => {
        event.preventDefault()
        let submit = true
        Object.keys(this.state).forEach(value=>{   
            if(value!=='id')     
            submit = submit && this.state[value]!==''
        })
        console.log(submit)
        if(!submit) return
        
        if(!this.props.editing)
            this.props.addToOrders(this.state)
        else
            this.props.editOrder(this.state)
        this.props.clearForm()

    }

    render(){

        let editedOrder = null
        
        if(this.props.editedOrder!==null)
            editedOrder = this.props.editedOrder
        
        let toggleButton = null
        if(this.props.editing)
            toggleButton = <button onClick={this.toggleAddEditOrder}>Toggle to {this.props.editing?"Add":"Edit"} Product</button>;

        return (
            <div className="Addoreditorder">
                <h1>Add or Edit Order</h1>
                <p>Fill The Order</p>
                <form onSubmit={this.onSubmitForm}>
                    <label>Name</label>
                    <input type="text" value={this.state.customer_name} onChange={(event)=>{this.handleNameChange(event)}} />
                    <label>Email</label>
                    <input type="text" value={this.state.customer_email} onChange={(event)=>{this.handleEmailChange(event)}} />
                    <label>Product</label>
                    <select onChange={(event)=>this.handleProductChange(event)} value={this.state.product}>
                        <option value="Product 1">Product 1</option>
                        <option value="Product 2">Product 2</option>
                        <option value="Product 3">Product 3</option>
                    </select>
                    <label>Qty</label>
                    <input type="number" value={this.state.quantity} onChange={(event)=>{this.handleQtyChange(event)}} />
                    {toggleButton}
                    <input type="submit" value={this.props.editing?"Edit":"Add"} />
                    <button onClick={this.clearForm}>Reset</button>
                    
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        editedOrder: state.editedOrder,
        editing: state.editing
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleEditing: ()=>dispatch(actions.toggleEditing()),
        clearForm: ()=>dispatch(actions.clearEditingOrder()),
        addToOrders: (order)=>dispatch(actions.addToOrders(order)),
        editOrder: (order)=>dispatch(actions.saveEditedOrder(order))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddOrEditOrder)