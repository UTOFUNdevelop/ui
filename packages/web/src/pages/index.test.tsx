import { render, screen } from "@testing-library/react";
import Home from "./index.page";

it("should render Home", async () => {
  const expected = "Welcome to Next.js!";

  render(<Home />);

  const actual = screen.getByText("Welcome to").textContent;

  expect(actual).toBe(expected);
});
