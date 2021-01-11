import React from "react"
import { App } from "./App"
import { createMemoryHistory } from 'history'
import { render } from "@testing-library/react"
import { Router } from "react-router-dom"
import { Home } from "./Home/Home"


// Uncorked, The Photograph, A fall from grace, The Banker, All day and night, Miss Jeneteenth
jest.mock("./Home", () => ({ Home: () => <div>Home</div> }))



describe("App", () => {
  it("renders successfully", () => {
    const history = createMemoryHistory()
    const { container } = render(
      <Router history={history}>
        <App />
      </Router>
    )
    expect(container.innerHTML).toMatch("Goblin Store")
  })

  it("renders Home component on root route", () => {
    const history = createMemoryHistory()
    history.push("/")
    const { container } = render(
      <Router history={history}>
        <App />
      </Router>
    )
    expect(container.innerHTML).toMatch("Home")
  })
})
