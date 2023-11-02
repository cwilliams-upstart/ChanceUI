import React from "react";
import Welcome from "./Welcome";

export default {
  title: "Welcome"
};

export const WithText = () => (
  <Welcome
    heading="Welcome to Chance UI"
    content={<h2>Some Text</h2>}
  />
);

export const WithButtons = () => (
  <Welcome
    heading="Welcome to Chance UI"
    content={
      <div>
        <button onClick={() => alert("You clicked me!")}>Click me</button>
      </div>
    }
  />
);
