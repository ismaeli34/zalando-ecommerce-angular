import { createReducer, on } from "@ngrx/store";
import { addItemToCartFailure, addItemToCartRequest, addItemToCartSuccess, getCartFailure, getCartRequest, getCartSuccess, removeCartItemFailure, removeCartItemRequest, removeCartItemSuccess, updateCartItemFailure, updateCartItemRequest, updateCartItemSuccess } from "./cart.action";

export interface CartState{
    cartItems: any[];
    loading: boolean;
    error:any;
    cart:any;
}

 const initialState:CartState ={
    cartItems :[],
    loading: false,
    error:null,
    cart:null,
};

export const cartReducer = createReducer(
    initialState,
    on(addItemToCartRequest,(state)=>({
        ...state,
        loading:false,
        error:null
    })),
    on(addItemToCartSuccess,(state,action)=>({
        ...state,
        loading:false,
        cartItems:[...state.cartItems,action.payload],
    })),
    on(addItemToCartFailure,(state,action)=>({
        ...state,
        loading:false,
        error:action.error
    })),
    on(getCartRequest,(state)=>({
        ...state,
        loading:true,
        error:null,
    })),
    on(getCartSuccess,(state,action)=>({
        ...state,
        loading:false,
        cartItems:action.payload.cartItems,
        cart:action.payload
    })),

    on(getCartFailure,(state,action)=>({
        ...state,
        loading:false,
        error:action.error,
    })),
    
    on(removeCartItemRequest,(state,action)=>({
        ...state,
        loading:false,
        error:null,
    })),
    on(removeCartItemSuccess,(state,action)=>({
        ...state,
        loading:false,
        cartItems: state.cartItems.filter((item)=> item.id !==action.cartItemId)
    })),
    on(removeCartItemFailure,(state,action)=>({
        ...state,
        loading:false,
        error:action.error
    })),
    on(updateCartItemRequest,(state)=>({
        ...state,
        loading:false,
        error:null
    })),
    on(updateCartItemSuccess,(state,action)=>({
        ...state,
        loading:false,
        cartItems: state.cartItems.map((item)=>item.id ===action.payload.id ? action.payload:item),
    })),
    // on(updateCartItemFailure,(state,action)=>({
    //     ...state,
    //     loading:false,
    //     error:action.error,
    // })),


)