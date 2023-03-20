export const WELCOM_SCREEN: string = "WELCOM_SCREEN";



export const welcomePageAction = (bool: boolean) => async (dispatch: any) => {
    try {
        dispatch({ type: WELCOM_SCREEN, payload: { data: bool } })
    } catch (error) {
        console.log(error);
    }
} 