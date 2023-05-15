const initialState = {
    item: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ITEMS":
            return action.payload
        default:
            return state;
    }
    console.log(state)
};
export default rootReducer;