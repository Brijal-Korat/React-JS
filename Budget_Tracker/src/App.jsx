import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState, useEffect } from "react";

function App() {
  const [budget, setBudget] = useState(""); // Budget as a string
  const [expenseName, setExpenseName] = useState("");
  const [expenseBudget, setExpenseBudget] = useState("");
  const [allExpenses, setAllExpenses] = useState(localStorage.getItem("expenses") ? JSON.parse(localStorage.getItem("expenses")) : []);

  //localStorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(allExpenses));
  }, [allExpenses]);

  //total expenses
  const totalExpenses = allExpenses.reduce((acc, item) => acc + Number(item.expBudget || 0), 0);

  //update balance
  const balance = Number(budget || 0) - totalExpenses;

  const handleBudgetSubmit = (e) => {
    e.preventDefault();
    // isNaN = if the number is string,   Number = if the number is in negative value 
    if (!budget || isNaN(budget) || Number(budget) <= 0) {
      alert("Please enter budget amount..!");
      return;
    }
    alert("Budget Amount added successfully..!");
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();

    // trim = remove extra spaces, isNaN = if the number is string,   Number = if the number is in negative value
    if (!expenseName.trim() || !expenseBudget || isNaN(expenseBudget) || Number(expenseBudget) <= 0) {
      alert("Please enter expense information..!");
      return;
    }

    const newExpense = {
      expName: expenseName,
      expBudget: expenseBudget, // Store as a string
    };

    setAllExpenses([...allExpenses, newExpense]);
    setExpenseName("");
    setExpenseBudget("");
    alert("Expense added successfully..!");
  };

  return (
    <>
      <div align="center">
        <h2 className="my-4">Budget Tracker App</h2>

        <div>
          <form onSubmit={handleBudgetSubmit}>
            <table style={{ margin: "20px auto" }} border={1} cellSpacing={3} cellPadding={3}>
              <thead>
                <tr>
                  <td>Set Budget</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      onChange={(e) => setBudget(e.target.value)}
                      value={budget}
                      placeholder="Enter total budget"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="submit">Set Budget</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>

        <div>
          <form onSubmit={handleExpenseSubmit}>
            <table style={{ margin: "20px auto" }} border={1} cellSpacing={3} cellPadding={3}>
              <thead>
                <tr>
                  <td>Add Expense</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      onChange={(e) => setExpenseName(e.target.value)}
                      value={expenseName}
                      placeholder="Enter Expense name"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      onChange={(e) => setExpenseBudget(e.target.value)}
                      value={expenseBudget}
                      placeholder="Enter Expense amount"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="submit">Add Expense</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>

        <div className="my-4">
          <table border={1} width={700}>
            <thead>
              <tr align="center">
                <th>Total Budget</th>
                <th>Total Expenses</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody align="center">
              <tr>
                <td>{budget}</td>
                <td>{totalExpenses}</td>
                <td style={{ color: balance < 0 ? "red" : "green" }}>{balance}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-4">
          <h4>Expense List</h4>
          <table border={1} width={500}>
            <thead>
              <tr align="center">
                <th>Expense Name</th>
                <th>Expense Amount</th>
              </tr>
            </thead>
            <tbody align="center">
              {
                allExpenses.map((e, index) => (
                  <tr key={index}>
                    <td>{e.expName}</td>
                    <td>{e.expBudget}</td>
                  </tr>
                ))
              }
              {
                allExpenses.length === 0 && (
                  <tr>
                    <td colSpan={2}>No expenses added yet.</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;






















// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.min.js"
// import { useState } from "react"

// function App() {

//   const [budget, setBudget] = useState("");
//   // const [expense, setExpense] = useState("");
//   const [expenseName, setExpenseName] = useState("");
//   const [expenseBudget, setExpenseBudget] = useState("");

  
//   let old = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
//   const [allData, setAllData] = useState(old)

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let obj = {
//       expName: expenseName,
//       expBudget: expenseBudget
//     }

//     const newUsers = [...allData, obj];
//     localStorage.setItem("users", JSON.stringify(newUsers));
//     setAllData(newUsers);
//     setExpenseName("");
//     setExpenseBudget("");
//     alert("Expense added in list..!");

//   }
  

//   return (
//     <>
//       <div align="center">
//         <h2 className="my-4">Budget Traker App</h2>

//         <div>
//           <form onSubmit={handleSubmit}>
//             <div className="d-flex justify-content-center align-items-center">
//               <table style={{ height: 140, marginRight: 20 }} border={1} cellSpacing={3} cellPadding={3}>
//                 <thead>
//                   <tr>
//                     <td>Budget</td>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>
//                       <input
//                         type="text"
//                         onChange={(e) => setBudget(e.target.value)}
//                         value={budget}
//                       />
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>
//                       <button type="submit">Set Budget</button>
//                     </td>
//                   </tr>
//                 </tbody>

//               </table>

//               <table border={1} cellSpacing={3} cellPadding={3}>
//                 <thead>
//                   <tr>
//                     <td>Expenses</td>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>
//                       <input
//                         type="text"
//                         onChange={(e) => setExpenseName(e.target.value)}
//                         value={expenseName}
//                       />
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>
//                       <input
//                         type="text"
//                         onChange={(e) => setExpenseBudget(e.target.value)}
//                         value={expenseBudget}
//                       />
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>
//                       <button type="submit">Check Amount</button>
//                     </td>
//                   </tr>
//                 </tbody>

//               </table>
//             </div>
//           </form>
//         </div>

//         <div className="my-4">
//           <table border={1} width={700}>
//             <thead>
//               <tr align="center">
//                 <th>Total Budget</th>
//                 <th>Expenses</th>
//                 <th>Balance</th>
//               </tr>
//             </thead>
//             <tbody align="center">
//               <tr>
//                 <td>{budget}</td>
//                 <td>6500</td>
//                 <td>1500</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App


