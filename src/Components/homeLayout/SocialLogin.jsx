import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-bold mb-5">Login with</h1>
      <div className="space-y-3">
        <button className="btn btn-outline btn-info w-full">
          <FcGoogle size={20} />
          Login with Google
        </button>
        <button className="btn btn-outline w-full btn-primary">
          <FaGithub size={20}/>
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
