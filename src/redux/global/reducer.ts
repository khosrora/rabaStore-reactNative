import { WELCOM_SCREEN } from "./action";
import { GlobalReducer } from "./types";




const initialState: GlobalReducer = {
    welcomePage: true
}

const globalReducer =  (state = initialState, action: any) => {

    switch (action.type) {
        case WELCOM_SCREEN:
            return {
                ...state,
                welcomePage: action.payload.data
            }
        default:
            return state;
    }


}

export default globalReducer;