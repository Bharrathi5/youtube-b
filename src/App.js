import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";

function App() {
  return (
    <div className="flex flex-col">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
