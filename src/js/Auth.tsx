import * as React from 'react'
import { connect } from 'react-redux'
import { store } from './Redux/store'
import { Redirect,Link } from 'react-router-dom'
import { firebase } from '../API/firebase/base.js'
import { getUserImgUrl,getAllNoteData,getBookMark,getNoteData } from '../API/firebase/Store.js'

import useReactRouter from 'use-react-router';

const mapStateToProps = state => ({
    isLogin: state.isLogin,
    loginCheck: state.loginCheck
})

//ログインステータスをセット
const setLoginStatus = (login,userid,userData,noteAllData) => {
    store.dispatch({ type:'SET_USER', payload: userid})
    store.dispatch({ type:'SET_USER_DATA', payload: userData})
    store.dispatch({ type:'SET_NOTE_DATA', payload: noteAllData})
    store.dispatch({ type:'LOGIN', payload: login})
}

//urlパラメーター分解
const getParam = (url) => {
    const pair = url.slice(1).split('&');
    let data = [];
  
    for(let i=0; pair[i]; i++) {
      const keyValue = pair[i].split('=');
      data[keyValue[0]]=keyValue[1];
    }
    return data
  
  }

//既にログインしていた時,画面遷移する
export const alreadyLoginCheck = async () => {
    firebase.auth().onAuthStateChanged(async (user) => {
        if(user) {
            const email = user.email;
            const userId = user.uid;
            const userData = await getUserImgUrl(userId)
            const noteData = await getAllNoteData(userId)
            setLoginStatus(true,{email,userId},userData,noteData)
            return
        }
        setLoginStatus(false,{email: '',userId:''},{},[])
    })
}

const setActiveData = async () => {
    const user = store.getState().queryData.user
    const id = store.getState().queryData.id
    const data = await getNoteData(user,id)
    if(data.share) {
        console.log('通りました',data.data)
        store.dispatch({type: 'SET_NOTE_ACTIVE_DATA',payload:{
            id:id,
            data:data  
        }})
        return
    }
}

const Auth = (props) => {
    const { location,match } = useReactRouter();
    const  query = location.search;
    
    if(query) {
        store.dispatch({ type: 'SET_QUERY', payload: query})
        const urlData = getParam(query);
        store.dispatch({ type: 'SET_QUERY_DATA', payload: urlData})
        setActiveData()
        
    }

    if(store.getState().isLogin && store.getState().query) {
        
        return props.children
    }
    
    if(store.getState().isLogin) return props.children

    return <Redirect to={'/login'}/>
}


export default connect(mapStateToProps)(Auth)
