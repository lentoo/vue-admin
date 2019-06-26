const USER_MAP = {
  userAdmin: {
    userId: 1,
    token: 'user admin',
    access: ['super_admin', 'admin']
  }
}
const isAdmin = username => ['lentoo', 'admin', 'super_admin'].includes(username)
export const login = req => {
  const { username } = JSON.parse(req.body)
  let response = {
    username
  }
  if (isAdmin(username)) {
    response.token = USER_MAP.userAdmin.token
  } else {
    response.token = 'user'
  }
  return response
}
