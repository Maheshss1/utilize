import * as actions from '../actions/action'
const editedOrder = {
    customer_name:'',
    customer_email:'',
    product:'Product 1',
    quantity:'',
    id:''
}


const initialState = {
    orders: [],
    loggedInUser:null,
    editedOrder:{...editedOrder},
    editing:false
}

const reducer = (state= initialState, action) => {
    let orders = null
    let editOrder = null
    switch(action.type){
        case actions.FETCH_ORDERS:
            return {
                ...state,
                orders:action.orders
            }
        case actions.GET_ORDER:
            editOrder = state.orders.find(order => order.id===action.id)
            return{
                ...state,
                editedOrder:editOrder,
                editing:true
            }
        case actions.TOGGLE_EDITING:
            const toggleEditing = !{...state}["editing"]
            return{
                ...state,
                editing: toggleEditing
            }
        case actions.CLEAR_EDITING_ORDER:
            return{
                ...state,
                editedOrder: {...editedOrder},
                editing:false
            }
        case actions.ADD_TO_ORDERS:
            orders = [...state.orders]
            orders.push(action.order)
            
            return{
                ...state,
                orders
            }
        case actions.DELETE_ORDER:
            orders = [...state.orders]
            orders = orders.filter(order => order.id!==action.id)
            return{
                ...state,
                orders,
                editing:false
            }
        case actions.SAVE_EDITED_ORDER:
            orders = [...state.orders]
            orders = orders.map(order=> {
                if(order.id===action.order.id)
                    return action.order
                return order

            })
            return{
                ...state,
                orders,
                editedOrder:{...editedOrder},
                editing:false
            }
        case actions.LOGIN_USER:
            localStorage.setItem('loggedInUser',JSON.stringify(action.loginDetails))
            console.log(action.loginDetails)
            console.log(localStorage.getItem("loggedInUser"))
            return{
                ...state,
                loggedInUser:action.loginDetails
            }
        // case actions.HANDLE_INPUT_CHANGE:
        //     return {
        //         ...state,
        //         editedOrder:{
        //             ...state.editedOrder,
        //             [action.input]:action.value
        //         }
        //     }
        default:
            return state;
    }
}

export default reducer