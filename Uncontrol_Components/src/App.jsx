import { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const userName = useRef("");
  const userEmail = useRef("");
  const userPhone = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`Name :- ${userName.current.value}`);
    console.log(`Email :- ${userEmail.current.value}`);
    console.log(`Phone :- ${userPhone.current.value}`);

    if (!userName.current.value || !userEmail.current.value || !userPhone.current.value) {
      alert("Please fill all the fields..!");
      return false;
    }

    userName.current.value = "";
    userEmail.current.value = "";
    userPhone.current.value = "";

    alert("Submitted Successfully..!");
  }

  return (

    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h3 className="text-center mb-4">User Information Form</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  ref={userName}
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  ref={userEmail}
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel:"
                  ref={userPhone}
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>


    // <div align="center">
    //   <form action="" onSubmit={handleSubmit}>
    //     <table border={1}>
    //       <tr>
    //         <td>
    //           Name :-
    //         </td>
    //         <td>
    //           <input type="text" ref={userName} />
    //         </td>
    //       </tr>
    //       <tr>
    //         <td>
    //           Email :-
    //         </td>
    //         <td>
    //           <input type="email" ref={userEmail} />
    //         </td>
    //       </tr>
    //       <tr>
    //         <td>
    //           Phone :-
    //         </td>
    //         <td>
    //           <input type="tel:" ref={userPhone} />
    //         </td>
    //       </tr>
    //       <tr>
    //         <td></td>
    //         <td>
    //           <button>Submit</button>
    //         </td>
    //       </tr>
    //     </table>
    //   </form>
    // </div>
  )
}

export default App;

// Make the best UI of this code.