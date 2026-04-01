import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("renders copyright text", () => {
  render(<Footer />);
  expect(screen.getByText(/Copyright Nathan Castaldi/i)).toBeInTheDocument();
});
