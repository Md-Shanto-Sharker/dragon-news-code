import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { createUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-xl font-bold text-center">
            Register your account
          </h1>

          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              required
            />

            <label className="label">Photo Url</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="photo"
              required
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="text-center font-bold ">
              Already Have An Account ?
              <Link to='/auth/login' className="text-red-500 ml-1">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
