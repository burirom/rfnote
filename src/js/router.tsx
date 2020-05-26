import * as React from "react";
import { store } from './Redux/store'
import Auth from './Auth'
import { Provider } from 'react-redux'
import { Router, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Loginpage from "./login/Page/Loginpage"
import Home from "./Home/Page/Home"
import BookMark from './BookMark/Page/BookMark'
import FooterBar from './Components/Footer/FooterBar'
import TitleBar from './Components/Header/TitleBar'
import Configuration from './Configuration/Page/Configuration'
import ChangeImg from './ChangeImg/Page/ChangeImg'
import Note from './Note/Page/NotePage'
import SignUp from './SginUp/Page/SignUpPage'

const RouterComponent = () => {
    console.log('ルーター',store.getState())
    return (
        <Provider store={store}>
            <Router history={createBrowserHistory()}>
                <TitleBar />
                <Route exact path='/login' component={Loginpage} />
                <Route exact path='/signup' component={SignUp} />
                    <Auth>
                        <FooterBar />
                        <Route exact path={['/home', '/']} component={Home} />
                        <Route exact path='/bookmark' component={BookMark}></Route>
                        <Route exact path='/note' component={Note}></Route>
                        <Route exact path='/configuration' component={Configuration}></Route>
                        <Route exact path='/ChangeImg' component={ChangeImg}></Route>
                        <Redirect from="/home" to="/home" />
                    </Auth>
            </Router>
        </Provider>
    )
}

export default RouterComponent;
