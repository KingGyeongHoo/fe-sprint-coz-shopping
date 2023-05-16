const bookmarkReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_BOOKMARK":
            if(state === []){
                return [action.payload]
            } else {
                return [...state, action.payload]
            }
        case "REMOVE_BOOKMARK":
            return state.filter(el => el.id !== action.payload.id)
            
        default:
            return state;
    }
};
export default bookmarkReducer;