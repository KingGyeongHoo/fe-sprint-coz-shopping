const initialState = {
    item: [],
};

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ITEMS":
            return action.payload
        default:
            return state;
    }
};
export default itemReducer;