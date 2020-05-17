import * as React from "react";
import * as ReactDOM from "react-dom";
import { store } from './Redux/store'
import RouterComponent  from "./router";

class Layout extends React.Component {
  render() {
    return (
      <>
        <RouterComponent />
      </>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);