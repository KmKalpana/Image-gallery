import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { SearchQueryProvider } from "./components/SearchQueryContext"

ReactDOM.render(
  <React.StrictMode>
    <SearchQueryProvider>
      <App />
    </SearchQueryProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
