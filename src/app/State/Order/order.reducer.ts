import { createReducer, on } from "@ngrx/store";
import { createOrderFailure, createOrderRequest, createOrderSuccess, getOrderByIdFailure, getOrderByIdRequest, getOrderByIdSuccess, getOrderHistoryFailure, getOrderHistorySuccess } from "./order.action";



export interface OrderState{
    loading: boolean;
    error:string | null;
    order:any | null;
    orders:any[];
}

 export const initialState:OrderState ={
    loading: false,
    error:null,
    order:null,
    orders:[]
};

export const orderReducer = createReducer(
    initialState,
    on(createOrderRequest,(state)=>({
        ...state,
        loading:true,
        error:null
    })),
    on(createOrderSuccess,(state,{order})=>({
        ...state,
        loading:false,
        order,
    })),
    on(createOrderFailure,(state,{error})=>({
        ...state,
        loading:false,
        error
    })),
    on(getOrderByIdRequest,(state)=>({
        ...state,
        loading:true,
        error:null
    })),
    on(getOrderByIdSuccess,(state,{order})=>({
        ...state,
        loading:false,
        order
    })),
    on(getOrderByIdFailure,(state,{error})=>({
        ...state,
        loading:false,
        error
    })),
    on(getOrderHistorySuccess,(state,{orders})=>({
        ...state,
        loading:false,
        orders
    })),
    on(getOrderHistoryFailure,(state,{error})=>({
        ...state,
        loading:false,
        error
    })),
)