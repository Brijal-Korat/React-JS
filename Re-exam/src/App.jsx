import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./pages/Add"
import View from "./pages/View"
import Edit from "./pages/Edit"

function App() {
 
  return (
    <div align="center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Add />} />
          <Route path="/view" element={ <View />} />
          <Route path="/edit" element={ <Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
