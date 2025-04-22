export const isAuthenticated = () => {
  return !!localStorage.getItem("userToken");
};

export const login = (token) => {
  localStorage.setItem("userToken", token);
};

export const logout = () => {
  localStorage.removeItem("userToken");
};
