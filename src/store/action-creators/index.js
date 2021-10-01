export const depositMoney = (amount) =>{
    return (dispatch) =>{
        dispatch({
            type: "deposit",
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) =>{
    return (dispatch) =>{
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
}

export const successCode = (amount) =>{
    return (dispatch) =>{
        dispatch({
            type: "success",
            payload: amount
        })
    }
}

export const magaze = (data) =>{
    return (dispatch) =>{
        dispatch({
            type: "magaze",
            payload: data
        })
    }
}
