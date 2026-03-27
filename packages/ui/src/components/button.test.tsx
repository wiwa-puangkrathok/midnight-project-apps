import "@testing-library/jest-dom/vitest"
import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { Button } from "./button.js"

describe("Button", () => {
  it("renders with children", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument()
  })

  it("applies default variant and size data attributes", () => {
    render(<Button>Default</Button>)
    const button = screen.getByRole("button")
    expect(button).toHaveAttribute("data-variant", "default")
    expect(button).toHaveAttribute("data-size", "default")
  })

  it("applies custom variant and size", () => {
    render(
      <Button variant="outline" size="lg">
        Outlined
      </Button>
    )
    const button = screen.getByRole("button")
    expect(button).toHaveAttribute("data-variant", "outline")
    expect(button).toHaveAttribute("data-size", "lg")
  })

  it("calls onClick handler when clicked", async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(<Button onClick={handleClick}>Click</Button>)
    await user.click(screen.getByRole("button"))

    expect(handleClick).toHaveBeenCalledOnce()
  })

  it("does not fire onClick when disabled", async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    )
    await user.click(screen.getByRole("button"))

    expect(handleClick).not.toHaveBeenCalled()
  })

  it("renders as child component when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/link">Link button</a>
      </Button>
    )
    const link = screen.getByRole("link", { name: "Link button" })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/link")
  })
})
