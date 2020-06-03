import { createStore } from "redux";

const loginState = {
    isLogin: false,
    user: {
        email: '',
        userId: ''
    },
    userData: {},
    noteData: [],
    bookMark: {},
    noteActiveID: null,
    query: ''

} 

const reducer = (state = loginState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return { ...state, isLogin: action.payload }
        case 'SET_QUERY': 
            return { ...state, query: action.payload}
        case 'SET_USER':
            return { ...state, user: action.payload}
        case 'SET_USER_DATA': 
            return { ...state, userData: action.payload}
        case 'SET_USER_DATA_IMG':
            return { ...state, userData: {imgurl: action.payload}}
        case 'SET_NOTE_DATA':
            return { ...state, noteData: action.payload}
        case 'SET_BOOKMARK_DATA':
            return { ...state, bookMark: action.payload}
        case 'UPDATA_NOTE_DATA_BOOKMARK':
            const bookMarkData = updateBookMark(state.noteData,action.payload)
            return { ...state, noteData: bookMarkData}
        case 'DELETE_NOTE_DATA':
            const data = removeItem(state.noteData,action.payload)
            return { ...state, noteData: data }
        case 'SET_ACTIVE_DATA':
            return { ...state, noteActiveID: action.payload }
        default:
            return state;
    }
}

const store = createStore(reducer);


const updateBookMark = (array,item) => {
    let data = []
     array.forEach(element => {
        if(element.id === item) {
            element.data.bookMark = !element.data.bookMark
        }
        data.push(element)
    });
    return data
    //  array.filte((v, i) => {
    //     console.log('id',v.id,'送られてきたid',item)
    //     console.log('あいうr歩',v.data.bookMark)
    //     if(v.id === item) {
    //         v.data.bookMark ===  !v.data.bookMark
    //     }
    // })
}

const removeItem = (array,item) => {
    return array.filter((v, i) => v.id !== item)
}



export { store, reducer, loginState }
    