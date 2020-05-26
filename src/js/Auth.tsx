import * as React from 'react'
import { connect } from 'react-redux'
import { store } from './Redux/store'
import { Redirect } from 'react-router-dom'
import { userAlreadyLogin } from '../API/firebase/Auth.js'
import { firebase } from '../API/firebase/base.js'

const mapStateToProps = state => ({
    isLogin: state.isLogin,
    loginCheck: state.loginCheck
})

//ログインステータスをセット
const setLoginStatus = (login) => {
    console.log('ストアの',login)
    store.dispatch({ type:'LOGIN', payload: login})
}

//既にログインしていた時,画面遷移する
export const alreadyLoginCheck = () => {
    // firebase.auth().onAuthStateChanged((user) => {
    //     user ? setLoginStatus(true) : setLoginStatus(false)
    // })
}
firebase.auth().onAuthStateChanged((user) => {
    user ? setLoginStatus(true) : setLoginStatus(false)
})



const Auth = (props) => {
    return store.getState().isLogin ? props.children : <Redirect to={'/login'}/>
}


export default connect(mapStateToProps)(Auth)
