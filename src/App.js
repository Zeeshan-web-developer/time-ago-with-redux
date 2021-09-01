import { Provider } from "react-redux";
import store from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store";
import "./App.css";
import Add from "./Add";
export default function App() {
  return (
    <div className="App">
      <h3>Testing Time Library</h3>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Add />
        </PersistGate>
      </Provider>
      ,
    </div>
  );
}
