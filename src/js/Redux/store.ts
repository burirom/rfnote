import { createStore } from "redux";

const loginState = {
    isLogin: false
} 

const reducer = (state = loginState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return { ...state, isLogin: action.payload }
        default:
            return state;
    }
}

const store = createStore(reducer);

export { store, reducer, loginState }
    