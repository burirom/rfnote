import * as React from 'react'
import { connect } from 'react-redux'
import { store } from './Redux/store'
import { Redirect } from 'react-router-dom'

const mapStateToProps = state => ({
    isLogin: state.isLogin
})

const Auth = (props) => (
    store.getState().isLogin ? props.children : <Redirect to={'/login'}/>
)


export default connect(mapStateToProps)(Auth)
