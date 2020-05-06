import * as React from "react";
import * as ReactDOM from "react-dom";
import { LoginRouterComponent } from "./router";

class Layout extends React.Component {
  render() {
    return (
      <>
        <LoginRouterComponent />
      </>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);