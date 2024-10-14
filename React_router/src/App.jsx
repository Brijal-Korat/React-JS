import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from "./pages/Table";
import Form from "./pages/Form";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Table /> } />
          <Route path="/form" element={ <Form /> } />
        </Routes>
      </BrowserRouter>
  )
}

export default App;