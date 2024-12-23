import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

{/* Component Composition */}
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);