import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

test("renders navigation links", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  expect(screen.getByText(/Nathan Castaldi/i)).toBeInTheDocument();
  expect(screen.getByText(/Portfolio/i)).toBeInTheDocument();
  expect(screen.getByText(/Resume/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact/i)).toBeInTheDocument();
});
