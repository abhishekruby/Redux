export const depositMoney = (amount)=>{
    return(dispatch)=>{
        dispatch({
            type:"Deposit",
            payload: amount
        })
    }
}
export const withdrawMoney = (amount)=>{
    return(dispatch)=>{
        dispatch({
            type:"Withdraw",
            payload: amount
        })
    }
}