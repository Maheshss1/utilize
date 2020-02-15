import * as actionTypes from './action'
import axios from 'axios'

export const fetchOrders = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS,
        orders: orders
    }
}

export const getOrder = (id) => {
    return{
        type:actionTypes.GET_ORDER,
        id:id
    }
}

export const fetchingOrders = (count) => {
    return dispatch => {
        // ?orderBy="id"&startAt=${count}&endAt=${count+30}
        return axios.get(`https://utilizeapplication-b8e0e.firebaseio.com/orders.json`)
            .then(res=>dispatch(fetchOrders(res.data)))
            .catch(error=>console.log(error))
    }
}

export const toggleEditing = () => {
    return {
        type:actionTypes.TOGGLE_EDITING,        
    }
}

export const clearEditingOrder = () => {
    return {
        type:actionTypes.CLEAR_EDITING_ORDER
    }
}

// export const handleInputChange = (input,value) => {
//     return {
//         type:actionTypes.HANDLE_INPUT_CHANGE,
//         input: input,
//         value:value
//     }
// }

export const addToOrders = (order) => {
    order.id = Date.now() * (Math.random()*5).toFixed(0)
    return {
        type:actionTypes.ADD_TO_ORDERS,
        order:order
    }
}

export const deleteOrder = (id) => {
    return {
        type:actionTypes.DELETE_ORDER,
        id:id
    }
}

export const saveEditedOrder = (order) => {
    return {
        type:actionTypes.SAVE_EDITED_ORDER,
        order:order
    }
}