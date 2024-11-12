import { BrowserRouter, Route, Routes } from "react-router-dom";
import View from "./pages/View";
import Add from "./pages/Add";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element="view">  <View /> </Route>
          <Route path="/add" element="add">  <Add /> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
