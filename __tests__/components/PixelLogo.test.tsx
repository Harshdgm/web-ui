import { render, screen } from "@testing-library/react";
import Logo from "../../components/ui/PixelLogo";

describe("Logo Component", () => {
  it("renders Logotype and Harsh Dev text", () => {
    render(<Logo />);
    expect(screen.getByText(/Logotype/i)).toBeInTheDocument();
    expect(screen.getByText(/Harsh Dev/i)).toBeInTheDocument();
  });
});
