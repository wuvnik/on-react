import React, { createRef, LegacyRef } from "react";
import logo from "../logo.svg";
import LinksList from "../components/home/LinksList";

const Home = () => {
  // const linkSection = useRef<any>(null);
  // const ref = createRef<any>(null);
  // const ref = useRef<any>(null);
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

export default Home;
