import axios from "axios";
import { useNavigate } from "react-router-dom";

export function useUserActions() {
  const navigate = useNavigate();
  const baseURL = "http://localhost:8000/api";
  return {
    login,
    // register,
    logout,
  };
}

// Login the user
export function login(data) {
  return axios
    .post(`http://localhost:8000/api/auth/login/`, data)
    .then((res) => {
      // Registering the account and tokens in the
      // store
      setUserData(data);
      navigate("/");
    });
}

// Get the user
export function getUser() {
  const auth = JSON.parse(localStorage.getItem("auth")) || null;
  // console.log(auth.user);
  if (auth) {
    return auth.user;
  } else {
    return null;
  }
}
// Get the access token
export function getAccessToken() {
  const auth = JSON.parse(localStorage.getItem("auth"));
  return auth.access;
}
// Get the refresh token
export function getRefreshToken() {
  const auth = JSON.parse(localStorage.getItem("auth"));
  return auth.refresh;
}
// Set the access, token and user property
function setUserData(res) {
  localStorage.setItem(
    "auth",
    JSON.stringify({
      access: res.data.access,
      refresh: res.data.refresh,
      user: res.data.user,
    })
  );
}

// Logout the user
function logout() {
  localStorage.removeItem("auth");
  navigate("/login");
}
