const initialState = {
    results: [],
}

export default function reducer(state=initialState, action){
    switch (action.type) {
        case 'ALL_CONTACTS':
            return {...state, results: action.payload}    
        default:
            return state
    }
}