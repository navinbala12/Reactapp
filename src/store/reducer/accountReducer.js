const reducer = (state = '', action) => {
    switch (action.type) {
        case "deposit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        case "success":
            alert('successfully logged in..... ');
        case "magaze":
            state = action.payload;
            return state;
        default:
            return state
    }
};

export default reducer;

