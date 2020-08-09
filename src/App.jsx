import React from "react";
import { Provider } from "react-redux";

import "./App.less";
import Singin from "./components/backboneComponents/account/signin.jsx";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div id="app">
        <Singin />
      </div>
    </Provider>
  );
}

export default App;
