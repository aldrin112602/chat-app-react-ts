import { useState } from "react";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

type DecodedToken = {
  email: string;
  name: string;
  picture: string;
};

export const GoogleSignin = () => {
  const [user, setUser] = useState<DecodedToken | null>(null);

  const responseMessage = (response: CredentialResponse) => {
    if (response.credential) {
      try {
        // Decode the JWT credential to get user information
        const decoded: DecodedToken = jwtDecode(response.credential);
        console.log("Decoded User:", decoded);
        setUser(decoded);
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  };

  return (
    <div>
      {!user ? (
        <GoogleLogin onSuccess={responseMessage} />
      ) : (
        <div>
          <h3>Welcome, {user.name}!</h3>
          <img src={user.picture} alt={`${user.name}'s profile`} />
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};
