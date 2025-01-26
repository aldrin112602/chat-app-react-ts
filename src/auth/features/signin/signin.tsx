import { Layout } from "../../components/layout";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { ProvidersLayout } from "../connect-providers/providersLayout";

export const Signin = () => {
  return (
    <Layout>
      <form className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-5">Sign in</h1>
        <Input
          label="Username"
          required
          name="username"
          id="username"
          onChange={() => {}}
        />
        <Input
          label="Password"
          required
          name="password"
          id="password"
          type="password"
          onChange={() => {}}
        />
        <Button type="submit" label="Sign in" />

        <p className="my-5 text-center">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500">
            Sign up
          </a>
        </p>
        <div className="border-t border-gray-300"></div>
        <p className="mt-5 text-center text-gray-500">Or</p>
        <div className="mt-5">
          <ProvidersLayout />
        </div>
      </form>
    </Layout>
  );
};
