import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
});

test("renders home page by default", () => {
  render(<App />);
  expect(screen.getByText(/Hi, I'm Nathan/i)).toBeInTheDocument();
});
