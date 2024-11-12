import { useDispatch, useSelector } from "react-redux"
import { Decrement, Increment, Reset } from "./action/counterAction";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {

  const dispatch = useDispatch();

  const no = useSelector(state => state.cnt);

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card text-center shadow" style={{ width: "300px" }}>
        <div className="card-body">
          <h1 className="card-title mb-4">Counter App</h1>
          <h2 className="mb-4">Count: {no}</h2>
          <div className="d-flex justify-content-around">
            <button
              onClick={() => dispatch(Decrement())}
              className="btn btn-danger btn-lg"
            >
              -
            </button>
            <button
              onClick={() => dispatch(Reset())}
              className="btn btn-secondary btn-lg"
            >
              R
            </button>
            <button
              onClick={() => dispatch(Increment())}
              className="btn btn-success btn-lg"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
