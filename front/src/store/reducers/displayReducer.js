const initialState = {
    display: false
}

export const displayReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_DISPLAY':
            return {...state, display: action.payload}
        default: 
            return state;
    }
}