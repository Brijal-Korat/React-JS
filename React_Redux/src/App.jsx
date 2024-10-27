import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment} from "./Redux/Action/counterAction"

function App() {

  const dispatch = useDispatch();
  const no = useSelector(state => state.brijal);

  return (
    <div align="center">
        <h1>Counter App</h1>
        <h2>Count :- {no}</h2>

        <button onClick={() => dispatch(Increment())}> + </button>
        <button onClick={() => dispatch(Decrement())}> - </button>
    </div>
  )
}

export default App;
