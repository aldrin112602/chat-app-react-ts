import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

type DecodedToken = {
  email: string;
  name: string;
  picture: string;
};

export const GoogleSignin = () => {
  const responseMessage = (response: CredentialResponse) => {
    if (response.credential) {
      try {
        // Decode the JWT credential to get user information
        const decoded: DecodedToken = jwtDecode(response.credential);
        console.log("User:", decoded);
        
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  };

  return <GoogleLogin onSuccess={responseMessage} />;
};
