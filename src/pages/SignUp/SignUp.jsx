import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout/Layout.jsx";

function SignIn() {
  return (
    <Layout>
      <h1 className="text-xl font-medium mb-3">Welcome</h1>
      <form className="flex flex-col justify-center items-center gap-3">
        <div className="flex flex-col">
          <label htmlFor="signup-name" className="self-start">
            Your name:{" "}
          </label>
          <input
            type="text"
            name="name"
            id="signup-name"
            className="border-solid border-2 border-black/60 rounded-xl p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="signup-email" className="self-start">
            Your email:{" "}
          </label>
          <input
            type="email"
            name="email"
            id="signup-email"
            placeholder="Email"
            className="border-solid border-2 border-black/60 rounded-xl p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="signup-password" className="self-start">
            Your password:{" "}
          </label>
          <input
            type="password"
            name="password"
            id="signup-password"
            placeholder="Password"
            className="border-solid border-2 border-black/60 rounded-xl p-2"
          />
        </div>
        <NavLink
          to={"/"}
          type="submit"
          className="bg-black rounded-xl text-white p-2 border-solid border-2 border-black/60"
        >
          Create
        </NavLink>
      </form>
    </Layout>
  );
}

export default SignIn;
