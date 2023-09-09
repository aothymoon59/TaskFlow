// Make users collection
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

// invited members
const addInvitedMembers = (member) => {
  const members = JSON.parse(localStorage.getItem("members"));
  let newMembers = [];
  if (members) {
    newMembers = [...members, member];
  } else {
    newMembers.push(member);
  }
  localStorage.setItem("members", JSON.stringify(newMembers));
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

export { addUsersToDb, getSingleUser, getAllUsers, addInvitedMembers };
