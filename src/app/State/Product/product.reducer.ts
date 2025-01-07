import { createReducer, on } from "@ngrx/store"
import { findProductByCategoryFailure, findProductByCategorySuccess, findProductByIdFailure, findProductByIdSuccess } from "./product.action"

// export interface ProductState{
//     products:any[];
//     loading: boolean;
//     error:string | null;
//     product:any | null;

// }


const initialState ={
    products:[],
    loading:false,
    error:null,
    product:null
}



export const productReducer = createReducer(
    initialState,
    // on(findProductByCategorySuccess,(state,{payload})=>({
    //     ...state,
    //     products:payload,
    //     loading:false
    // })),
    
    // on(findProductByIdSuccess,(state,{payload})=>({
    //     ...state,
    //     product:payload,
    //     loading:false
    // })),

    // on(findProductByCategoryFailure,
    //     findProductByIdFailure,(state,{error})=>({
    //     ...state,
    //     error:error,
    //     loading:false
    // })),
)



