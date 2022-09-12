import React from "react";
import { NavLink } from "react-router-dom";

const Title2 = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-lg font-bold">{children}</h3>;
};

// const LinksList = React.forwardRef(({handleScroll}, ref) => {
const LinksList = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="h-screen bg-[#282c34] text-white  p-5">
      <h2 className="text-3xl font-bold underline underline-offset-2">List - Redux</h2>
      <br />
      <div className="flex flex-col list-decimal">
        {/* <Title2>Basic</Title2> */}
        <NavLink to="/1">Redux Counter</NavLink>
        <NavLink to="/2">Redux Toolkit Counter</NavLink>
        {/* <br /> */}
        {/* <Title2>Intermediate</Title2> */}
        <NavLink to="/3">Redux - Shopping </NavLink>
        <NavLink to="/4">Redux - Shopping (API)</NavLink>
      </div>
    </section>
  );
});

export default LinksList;
