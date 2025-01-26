import { Button } from "../../../../components/button";
import { useEffect } from "react";
import axios from "axios";
import config from "../../../../config";

export const GithubSignin = () => {
  const { githubClientId, apiUrl } = config;
  const handleGitHubLogin = async () => {
    const redirectURI = "http://localhost:5173";
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${githubClientId}&redirect_uri=${redirectURI}`;
  };

  useEffect(() => {
    const exchangeCodeForToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      if (!code) return;

      try {
        const response = await axios.post(`${apiUrl}/api/github/access-token`, {
          code,
        });

        console.log("Access Token:", response.data.access_token);
      } catch (error: any) {
        console.error("Error fetching access token:", error.response || error);
      }
    };

    exchangeCodeForToken();
  }, []);

  return (
    <Button
      onClick={handleGitHubLogin}
      label="Sign in with GitHub"
      className="border hover:opacity-90 bg-slate-900 text-white rounded block w-full my-3 py-2 cursor-pointer"
    />
  );
};
