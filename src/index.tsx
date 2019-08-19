import * as serviceWorker from "./serviceWorker";
import Containers from "./containers";
import "moment/locale/ja";
import React from "react";
import ReactDOM from "react-dom";
import "ress";
import "./styles/global.sass";

ReactDOM.render(<Containers />, document.getElementById("root"));

serviceWorker.register();
