import Cookies from "js-cookie"

export const Logout = (router) => {
  Cookies.remove('user', { path: '/' })
  Cookies.remove('email', { path: '/' })
  Cookies.remove('token', { path: '/' })
  Cookies.remove('image', { path: '/' })
  localStorage.removeItem('user')
  router.refresh()
  router.push('/login')
}