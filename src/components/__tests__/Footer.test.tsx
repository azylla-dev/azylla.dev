import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders the author name", () => {
    render(<Footer />);
    expect(screen.getByText(/Alexander Zylla/)).toBeDefined();
  });

  it("renders the imprint link", () => {
    render(<Footer />);
    const links = screen.getAllByText("Imprint");
    expect(links.length).toBeGreaterThan(0);
    expect(links[0].getAttribute("href")).toBe("/imprint");
  });
});
