import { render, screen } from "@testing-library/react";
import DiagonalDivider from "../../components/ui/DiagonalDivider";

test("renders diagonal divider", () => {
  render(<DiagonalDivider />);
  expect(screen.getByTestId("diagonal-divider")).toBeInTheDocument();
});

