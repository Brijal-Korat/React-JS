import { useState } from "react"

function App() {
  const [no, setNo] = useState(0);

  setTimeout(() => {
    if(no < 50){
      setNo(no + 1);
    }
  }, 1000);

  return (
    <>
      <div align="center">
        <h2> Counter :- {no}</h2>
      </div>
    </>
  )
}

export default App;