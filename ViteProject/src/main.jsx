/* eslint-disable no-unused-vars */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import React from "react";
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );


// const reactElement = {
//   type: 'a',
//   props:{
//       href:"https://google.com",
//       target:"_blank"
//   },
//   children: "Click me to visit google"
// } // we can't enject this obj coz React.createElement() have specific values of key and values, so we can't make our own keys


const anotherUser ="Hi or Chai"

const reactElement = React.createElement(
  'a',
  {href: "https://google.com",target:"_blank"},
  'click me to visit google',
  anotherUser //variable of js
  // if(anotherUser === "Hi or Chai") //we can't dp this becaz in js , if else lop etc.. can't eject in object and they are evaluated expression
) // this is how react create elements and js variables

const root = createRoot(document.getElementById("root"));
root.render(
 reactElement
);
