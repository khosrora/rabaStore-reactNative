import axios from "axios";

export const WELCOM_SCREEN: string = "WELCOM_SCREEN";
export const SET_DARKMODE: string = "SET_DARKMODE";



export const welcomePageAction = (bool: boolean) => async (dispatch: any) => {
    try {
        dispatch({ type: WELCOM_SCREEN, payload: { data: bool } })
    } catch (error) {
        console.log(error);
    }
}

export const darkMode = (bool: boolean) => async (dispatch: any) => {
    try {
        dispatch({ type: SET_DARKMODE, payload: { data: bool } })
    } catch (error) {
        console.log(error);
    }
}

// export const testFetchData = () => async (dispatch: any) => {
//     try {
//         const res = await axios.get("http://localhost:3000/");
//         console.log(res.data);   
//         return;
//     } catch (error) {
//         console.log(error);
//     }    
// }