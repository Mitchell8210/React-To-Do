import React from "react"
import { Provider } from "react-redux"
import store from "../store"
import Main from './main'
import ItemForm from './ItemForm'
function App() {
  return (
    <Provider store={store}>
      <Main/>
      <ItemForm/>
    </Provider>
  )
}

export default App
