const addUsersToDb = (user) => {
  const users = JSON.parse(localStorage.getItem("users"));
  let newUsers = [];
  if (users) {
    newUsers = [...users, user];
  } else {
    newUsers.push(user);
  }
  localStorage.setItem("users", JSON.stringify(newUsers));
};

// Get all user
const getAllUsers = () => {
  let users = JSON.parse(localStorage.getItem("users"));
  return users;
};

// getSingleUser
const getSingleUser = (email) => {
  let users = JSON.parse(localStorage.getItem("users"));
  const existUser = users?.find((user) => user?.email === email);
  return existUser;
};

export { addUsersToDb, getSingleUser, getAllUsers };
