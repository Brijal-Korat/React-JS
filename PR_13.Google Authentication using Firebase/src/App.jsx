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
    <div className="d-flex align-items-center justify-content-center vh-100">
      <button
        className="btn btn-primary d-flex align-items-center justify-content-center"
        onClick={handleSubmit}
      >
        Sign in with Google
      </button>
    </div>
  )
}

export default Login