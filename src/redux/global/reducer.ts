import { WELCOM_SCREEN , SET_DARKMODE } from "./action";
import { GlobalReducer } from "./types";




const initialState: GlobalReducer = {
    welcomePage: true , 
    dark : false
}

const globalReducer =  (state = initialState, action: any) => {

    switch (action.type) {
        case WELCOM_SCREEN:
            return {
                ...state,
                welcomePage: action.payload.data
            }
        case SET_DARKMODE : 
            return {
                ...state , 
                dark : action.payload.data
            }
        default:
            return state;
    }


}

export default globalReducer;