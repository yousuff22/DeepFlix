import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appstore";

const App = () => {
  return (
    <Provider store={appStore}>
      <Body/>
    </Provider>
  );
}

const Hroot = document.getElementById('root');
const root = ReactDOM.createRoot(Hroot);

root.render(<App />);

export default App;
