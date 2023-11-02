import React from "react";
import { render, within } from "@testing-library/react";

import Welcome from "./Welcome";
import { WelcomeProps } from "./Welcome.types";

describe("TestComponent", () => {
  const renderComponent = ({ heading, content }: Partial<WelcomeProps>) =>
    render(
      <Welcome
        heading={heading || "Default heading text"}
        content={content || <div>Default content</div>}
      />
    );

  it("should render heading text correctly", () => {
    const headingText = "Some test heading";

    const { getByTestId } = renderComponent({ heading: headingText });

    const testComponent = getByTestId("test-component__heading");

    expect(testComponent).toHaveTextContent(headingText);
  });

  it("should render content correctly", () => {
    const { getByTestId } = renderComponent({
      content: <div data-testid="some-test-content">I am test content</div>
    });

    expect(
      within(getByTestId("test-component__content")).queryByTestId(
        "some-test-content"
      )
    ).toBeInTheDocument();
  });
});
