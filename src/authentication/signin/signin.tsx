import { Layout } from "../layout"
import { Input } from "../../components/input"
import { Button } from "../../components/button"

export const Signin = () => {
  return (
    <Layout>
      <form className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md">
        <Input label="Username" required name="username" id="username" onChange={() => {}} />
        <Input label="Password" required name="password" id="password" type="password" onChange={() => {}} />
        <Button type="submit" label="Sign in"/>
      </form>
    </Layout>
  )
}
