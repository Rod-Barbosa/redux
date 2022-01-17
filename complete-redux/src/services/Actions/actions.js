const { ADD_TO_CART, REMOVE_FROM_CART} = require("../constants")

export default function addtoCart(data){

        return {
            type: ADD_TO_CART,
            data: data
        }
    }

export function  RemovefromCart(data){
    return {
        type: REMOVE_FROM_CART,
        data: data
    }
}


// export const addtoCart=(data)=>{

//     return {
//         type: ADD_TO_CART,
//         data: data
//     }
// }

// export const RemovefromCart=(data)=>{
//     return {
//         type: REMOVE_FROM_CART
//     }
// } 