import { useCookies } from "react-cookie";

function Logout() {
  const [, removeCookie] = useCookies([]); // Ignore `cookies` since it's not used
  removeCookie("token");
  window.location.href = "https://frontend.d1dk8zlerjmfx7.amplifyapp.com/login";

  return null; // Return null as this component doesn't render anything
}

export default Logout;
