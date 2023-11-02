import React from "react";
import Welcome from "./Welcome";

export default {
  title: "Welcome"
};

export const WithText = () => (
  <Welcome
    content={<h2>Some Text</h2>}
  />
);

export const WithButtons = () => (
  <Welcome
    content={
      <div>
        <button onClick={() => alert("You clicked me!")}>Click me</button>
      </div>
    }
  />
);
