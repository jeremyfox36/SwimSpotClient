// eslint-disable-next-line import/prefer-default-export
export function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return { Authorization: `Bearer${user.token}` };
  }
  return {};
}
