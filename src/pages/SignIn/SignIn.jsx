import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout/Layout.jsx";

function SignIn() {
  return (
    <Layout>
      <h1 className="text-xl font-medium mb-3">Welcome</h1>
      <form className="flex flex-col justify-center items-center gap-3">
        <input
          type="email"
          name="email"
          id="login-email"
          placeholder="Email"
          className="border-solid border-2 border-black/60 rounded-xl p-2"
        />
        <input
          type="password"
          name="password"
          id="login-password"
          placeholder="Password"
          className="border-solid border-2 border-black/60 rounded-xl p-2 mb-3"
        />
        <button
          type="submit"
          className="bg-black rounded-xl text-white p-2 border-solid border-2 border-black/60"
        >
          Log in
        </button>
        <p className="underline underline-offset-4 mb-3 text-sm font-light">
          Forgot your password
        </p>
        <NavLink
          to={"/sign-up"}
          className="bg-white rounded-xl text-black/60 p-2 border-solid border-2 border-black/60 text-center"
        >
          Sign up
        </NavLink>
      </form>
    </Layout>
  );
}

export default SignIn;
