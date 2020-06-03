import * as React from 'react'
import { connect } from 'react-redux'
import { store } from './Redux/store'
import { Redirect,Link } from 'react-router-dom'
import { firebase } from '../API/firebase/base.js'
import { getUserImgUrl,getNoteData,getBookMark } from '../API/firebase/Store.js'

import useReactRouter from 'use-react-router';

const mapStateToProps = state => ({
    isLogin: state.isLogin,
    loginCheck: state.loginCheck
})

//ログインステータスをセット
const setLoginStatus = (login,userid,userData,noteData) => {
    store.dispatch({ type:'SET_USER', payload: userid})
    store.dispatch({ type:'SET_USER_DATA', payload: userData})
    store.dispatch({ type:'SET_NOTE_DATA', payload: noteData})
    store.dispatch({ type:'LOGIN', payload: login})
    
    
}

//既にログインしていた時,画面遷移する
export const alreadyLoginCheck = async () => {
    firebase.auth().onAuthStateChanged(async (user) => {
        if(user) {
            const email = user.email;
            const userId = user.uid;
            const userData = await getUserImgUrl(userId)
            const noteData = await getNoteData(userId)
            setLoginStatus(true,{email,userId},userData,noteData)
            return
        }
        setLoginStatus(false,{email: '',userId:''},{},[])
    })
}

const Auth = (props) => {
    const { location,match } = useReactRouter();
    const  query = location.search;
    
    if(query) {
        store.dispatch({ type: 'SET_QUERY', payload: query})
    }

    if(store.getState().isLogin && store.getState().query) {
        console.log('クエリ',match)
        return props.children
    }
    
    if(store.getState().isLogin) return props.children

    return <Redirect to={'/login'}/>
}


export default connect(mapStateToProps)(Auth)
