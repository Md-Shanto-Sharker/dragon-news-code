import { format } from "date-fns";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3">
      <img className="w-[400px]" src="/src/assets/logo.png" alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>

      <p className=" text-accent">{format(new Date(), "EEEE, MMMM MM yyyy")}</p>
    </div>
  );
};

export default Header;
