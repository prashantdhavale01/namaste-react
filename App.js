import React from "react";
import ReactDOM from "react-dom/client"

const reactElement = <h1 id="parent" className="heading">React Element</h1>;

// Function Component - Return react element or JSX
const Title = () => {
  return <h1 id="parent" className="heading">Title Component - Namaste React</h1>;
}

{/* Component Composition */}
const HeadingComponent = () => {
  return (
    <>
      {reactElement}
      {Title()} {/* Call function */}
      <Title/> 
      <Title></Title> 
      <h1 id="parent" className="heading">Component Namaste React</h1>
      {400+300}
    </>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);