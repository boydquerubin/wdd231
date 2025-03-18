// users.js
function usersWrapper () {
  var users = ["Tyler", "Sarah", "Dan"]

  function getUsers() {
    return users
  }

  APP.getUsers = getUsers
}

usersWrapper()