import { GithubSignin } from "./github/githubSignin";
import { GoogleSignin } from "./google/googleSignin";

export const ProvidersLayout = () => {
  return (
    <div>
      <GoogleSignin />
      <GithubSignin />
    </div>
  );
};
