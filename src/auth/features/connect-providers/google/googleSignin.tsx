import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "../../../../components/button";

export const GoogleSignin = () => {
  const login = useGoogleLogin({
    onSuccess: (response: any) => {
      console.log(response);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  return <Button className="border hover:opacity-90 bg-blue-400 text-white rounded block w-full my-3 py-2 cursor-pointer" label="Sign in with Google" onClick={login} />;
};
