import { signInWithPopup } from "firebase/auth"
import { googleAuthProvider, auth } from "../firebase"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const Login = () => {
  const handleSubmit = async () => {
    try {
      let login = await signInWithPopup(auth, googleAuthProvider)
    } catch (err) {
      console.log("err")
      return false;
    }
  }
  return (
    <div align="center">
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <button className="btn btn-light border shadow-sm d-flex align-items-center" onClick={handleSubmit}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google Logo"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          Sign in with Google
        </button>
      </div>
      {/* <button onClick={handleSubmit}>
        Sign In
      </button> */}
    </div>
  )
}

export default Login