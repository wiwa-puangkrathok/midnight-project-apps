import "@testing-library/jest-dom/vitest"
import { render, screen } from "@testing-library/react"

import { Badge } from "./badge.js"

describe("Badge", () => {
  it("renders with children text", () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText("New")).toBeInTheDocument()
  })

  it("applies default variant data attribute", () => {
    render(<Badge>Default</Badge>)
    const badge = screen.getByText("Default")
    expect(badge).toHaveAttribute("data-variant", "default")
  })

  it("applies custom variant", () => {
    render(<Badge variant="destructive">Error</Badge>)
    const badge = screen.getByText("Error")
    expect(badge).toHaveAttribute("data-variant", "destructive")
  })

  it("renders as child component when asChild is true", () => {
    render(
      <Badge asChild>
        <a href="/tag">Tag link</a>
      </Badge>
    )
    const link = screen.getByRole("link", { name: "Tag link" })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/tag")
  })

  it("passes additional className", () => {
    render(<Badge className="custom-class">Styled</Badge>)
    const badge = screen.getByText("Styled")
    expect(badge).toHaveClass("custom-class")
  })
})
