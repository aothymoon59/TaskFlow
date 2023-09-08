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

// getSingleUser
const getSingleUser = (email) => {
  let users = JSON.parse(localStorage.getItem("users"));
  const existUser = users?.find((user) => user?.email === email);
  return existUser;
};

export { addUsersToDb, getSingleUser };
