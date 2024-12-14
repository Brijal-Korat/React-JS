import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setName(location?.state?.name || "");
    setPhone(location?.state?.phone || "");
  }, [location?.state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone) {
      alert("Please fill all the fields!");
      return;
    }

    let updatedUser = {
      id: location?.state?.id,
      name: name,
      phone: phone,
    };

    let users = localStorage.getItem("addedUsers")
      ? JSON.parse(localStorage.getItem("addedUsers"))
      : [];

    let updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );

    localStorage.setItem("addedUsers", JSON.stringify(updatedUsers));

    alert("Record updated successfully!");
    navigate("/view"); 
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
