// import { useEffect, useState } from "react"
// import { Link, useLocation, useNavigate } from "react-router-dom";

// const Edit = () => {

//     const [name,setName] = useState("");
//     const [phone,setPhone]= useState("");
//     const location = useLocation();

//     useEffect(()=> {
//         setName(location?.state?.name)
//         setPhone(location?.state?.phone)
//     },[location?.state])

//     const handleSubmit = (e) => {
//         e.preventDefalut();

//         let obj = {
//             id : location?.state?.id,
//             name : name,
//             phone : phone
//         }
//         alert("Record updated successfully..!");
//         navigate('/view');
//     }

//     return(
//         <div>
//             <h1>Edit User</h1>
//             <form onSubmit={handleSubmit}>
//                 <table>
//                     <tr>
//                         <td>Name :-</td>
//                         <td>
//                             <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>phone :-</td>
//                         <td>
//                             <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone}/>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td>
//                             <input type="submit" />
//                         </td>
//                     </tr>
//                 </table>
//             </form>
//             <Link to={`/view`}>View</Link>
//         </div>
//     )
// }
// export default Edit












import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Prepopulate the fields with the user data passed through location state
    setName(location?.state?.name || "");
    setPhone(location?.state?.phone || "");
  }, [location?.state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone) {
      alert("Please fill all the fields!");
      return;
    }

    // Prepare the updated user object
    let updatedUser = {
      id: location?.state?.id,
      name: name,
      phone: phone,
    };

    // Retrieve existing users from localStorage
    let users = localStorage.getItem("addedUsers")
      ? JSON.parse(localStorage.getItem("addedUsers"))
      : [];

    // Update the specific user in the array
    let updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );

    // Save the updated array back to localStorage
    localStorage.setItem("addedUsers", JSON.stringify(updatedUsers));

    alert("Record updated successfully!");
    navigate("/view"); // Navigate back to the View page
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>
                <input
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <Link to={`/view`}>View</Link>
    </div>
  );
};

export default Edit;
