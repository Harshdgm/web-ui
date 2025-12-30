import { render, screen } from "@testing-library/react";
import Home from "../app/page"; 

describe("Home Page", () => {
  // we do not need to test trivial code, this is just for testing purpose
  it("renders Home Page heading", () => {
    render(<Home />);
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
  });

  // integration test
  it("renders DiagonalDivider", () => {
    render(<Home />);
    // const canvas = screen.getByTestId("diagonal-divider");
    // expect(canvas).toBeInTheDocument();
    const dividers = screen.getAllByTestId("diagonal-divider");
    expect(dividers.length).toBeGreaterThan(0);
  });

  it("renders Another content",()=>{
    render(<Home />);
    expect(screen.getByText(/Another content/i)).toBeInTheDocument();
  });
});
