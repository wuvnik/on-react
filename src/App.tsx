import { createRef, LegacyRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import LinksList from "./components/home/LinksList";
import Redux from "./pages/Redux";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import ReduxToolkit from "./pages/ReduxToolkit";
import storeRtk from "./components/redux-toolkit/store";
import ShoppingApp from "./pages/ShoppingApp";
import storeShoppingApp from "./components/shopping-app/store";
import ShoppingAppAPI from "./pages/ShoppingAppAPI";
import storeShoppingAppAppi from "./components/shopping-app-api/store";
// import Home from "./pages/Home";

const Home = () => {
  const ref = createRef<any | LegacyRef<HTMLDivElement> | undefined>();

  return (
    <div className="App">
      <header className="App-header relative">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            React
          </a>
        </p>
        <button
          className="absolute bottom-0 left-1/20 px-3 py-1 bg-slate-700 mb-5 rounded-xl text-base text-slate-200"
          onClick={() => {
            if (ref && ref.current) {
              ref.current.scrollIntoView({
                behaviour: "smooth",
                block: "start",
              });
            }
          }}
        >
          See more
        </button>
      </header>
      <LinksList ref={ref} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/1"
          element={
            <Provider store={store}>
              <Redux />
            </Provider>
          }
        />
        <Route
          path="/2"
          element={
            <Provider store={storeRtk}>
              <ReduxToolkit />
            </Provider>
          }
        />
        <Route
          path="/3"
          element={
            <Provider store={storeShoppingApp}>
              <ShoppingApp />
            </Provider>
          }
        />
        <Route
          path="/4"
          element={
            <Provider store={storeShoppingAppAppi}>
              <ShoppingAppAPI />
            </Provider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
