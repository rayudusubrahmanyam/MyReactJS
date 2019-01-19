import React from "react";

const Jsxexam = () => {
  const name = "Rayudu";
  return (
    <div>
      <h1> JSX Examples</h1>
      <h2>
        {" "}
        {name} {2 + 3}
      </h2>
      <p name="p1" className="p33" style={{ color: "red", fontSize: 50 }}>
        Test Paragraph
      </p>
    </div>
  );
};

export const Listcomp = () => {
  return [
    // Don't forget the keys :)
    <li key="A">First item</li>,
    <li key="B">Second item</li>,
    <li key="C">Third item</li>
  ];
};
export default Jsxexam;
