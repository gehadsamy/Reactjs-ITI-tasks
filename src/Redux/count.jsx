const INCREMENT_COUNT = "INCREMENT_COUNT"
const DECREMENT_COUNT = "DECREMENT_COUNT"
//action
export const incrementCount = (payload) => {

    return {
        type: INCREMENT_COUNT,
        payload
    }
}
export const decrementCount = (payload) => {

    return {
        type: DECREMENT_COUNT,
        payload
    }
}
//state
export const initialState = {
    count: 0,

}

//reducer 

export const counterreducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return { ...state, count: state.count + action.payload };
        case DECREMENT_COUNT:
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }
}


// store 

// export default counterreducer;