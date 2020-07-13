import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import Singin from "./components/backboneComponents/account/signin.jsx";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Singin />
      </div>
    </Provider>
  );
}

export default App;
