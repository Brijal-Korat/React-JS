export const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];

export const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

export const getCurrentUser = () => JSON.parse(localStorage.getItem("checkuser"));

export const removeCurrentUser = () => {
  localStorage.removeItem("checkuser");
};
