import { render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders contact form", () => {
  render(<ContactForm />);
  expect(screen.getByText(/Contact Me/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Send Email/i })).toBeInTheDocument();
});

test("renders name and email inputs", () => {
  render(<ContactForm />);
  expect(screen.getByPlaceholderText(/Chester Elegante/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/user@website.com/i)).toBeInTheDocument();
});
