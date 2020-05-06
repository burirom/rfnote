import * as React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Loginpage from "./login/Page/Loginpage"
import Home from "./Home/Page/Home"
import BookMark from './BookMark/Page/BookMark'
import FooterBar from './Components/Footer/FooterBar'
import TitleBar from './Components/Header/TitleBar'
import Configuration from './Configuration/Page/Configuration'
import ChangeImg from './ChangeImg/Page/ChangeImg'
import Note from './Note/Page/NotePage'
import Box from '@material-ui/core/Box';

const LoginRouterComponent = () => (
    <>
    <Router history={createBrowserHistory()}>
       <div>
           <Route exact path='/' component={Loginpage} />
           <Route path='/home' component={HomeRouterComponent} />
           <Route path='/bookmark' component={HomeRouterComponent}></Route>
       </div>
    </Router>
    </>
)

const HomeRouterComponent = () => (
    <>
    <Router history={createBrowserHistory()}>
       <div>
           <TitleBar />
           <FooterBar />
          <Route exact path='/home' component={Home}></Route>
          <Route path='/bookmark' component={BookMark}></Route>
          <Route path='/note' component={Note}></Route>
          <Route path='/configuration' component={ConfRouterComponent}></Route>
       </div>
    </Router>
    </>
)

const ConfRouterComponent = () => (
    <>
    <Router history={createBrowserHistory()}>
       <div>
           <TitleBar />
          <Route exact path='/configuration' component={Configuration}></Route>
          <Route path='/ChangeImg' component={ChangeImg}></Route>
       </div>
    </Router>
    </>
)
export {LoginRouterComponent,HomeRouterComponent};
