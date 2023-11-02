import React from "react";


import "./Welcome.css";
import { WelcomeProps } from "./Welcome.types";

const Welcome: React.FC<WelcomeProps> = ({ heading, content }) => (
  <div data-testid="test-component" className="test-component">
    <h1 data-testid="test-component__heading" className="heading">
      {heading}
    </h1>
    <div data-testid="test-component__content">{content}</div>
  </div>
);

export default Welcome;