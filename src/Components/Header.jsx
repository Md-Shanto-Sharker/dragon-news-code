import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3">
      <img className="w-[350px]" src="/src/assets/logo.png" alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p>
        <span>Sunday</span>, November 27, 2025
      </p>
    </div>
  );
};

export default Header;
