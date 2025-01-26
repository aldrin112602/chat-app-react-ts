import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "../../../../components/button";

export const GoogleSignin = () => {
  const login = useGoogleLogin({
    onSuccess: (response: any) => {
      console.log(response);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  return <Button label="Sign in with Google" onClick={login} />;
};
