const users = [];

export const getUserByName = (name) => users.find((user) => user.name === name);
export const getUserByGroups = (groupNo)=> users.find((user)=>user.group === group);
export const getUser = (id) => users.find((user) => user.id === id);
export const getUsersInRoom = (room) => users.filter((user) => user.room === room);
export const modifyUserGroup = (id,groupNumber) => {
  var targetUser =  users.find((user) => user.id === id);
  targetUser.group = groupNumber;
}

function changeSocketID( name, new_id ) {
  for (var i in users) {
    if (users[i].name == name) {
       users[i].id = new_id;
       break; //Stop this loop, we found it!
    }
  }
}

export const addUser = ({ id, name, room }) => {
  const group = 0;
  const existingUser = users.find((user) => user.room === room && user.name === name);

  if(!name || !room ) return { error: 'Username and room are required.' };
  let user;
  if(existingUser) {
    changeSocketID(name,id);
    user = getUserByName(name);
  }else{
    user = { id, name, room, group };

    users.push(user);
  }

  return { user };
}

export const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) return users.splice(index, 1)[0];
}



