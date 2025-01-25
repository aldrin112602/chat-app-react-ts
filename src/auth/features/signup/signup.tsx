import { Layout } from "../../components/layout";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";

export const Signup = () => {
  return (
    <Layout>
      <form className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-5">Sign Up</h1>
        <Input
          label="Email address"
          required
          name="email"
          id="email"
          type="email"
          onChange={() => {}}
        />
        <Input
          label="Full name"
          required
          name="name"
          id="name"
          onChange={() => {}}
        />
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
        <Input
          label="Confirm Password"
          required
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          onChange={() => {}}
        />
        <Button type="submit" label="Sign Up" />
      </form>
    </Layout>
  );
};
