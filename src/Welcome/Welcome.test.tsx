import React from "react";
import { render, within } from "@testing-library/react";

import Welcome from "./Welcome";
import { WelcomeProps } from "./Welcome.types";

describe("TestComponent", () => {
  const contentText = 'Default content';
  const renderComponent = ({ content }: Partial<WelcomeProps>) =>
    render(
      <Welcome
        content={content || <div>{contentText}</div>}
      />
    );

  it("should render heading text correctly", () => {
    const headingText = "Some test heading";

    const { getByTestId } = renderComponent({ content: contentText });

    const testComponent = getByTestId("test-component__heading");

    expect(testComponent).toHaveTextContent(contentText);
  });
});
