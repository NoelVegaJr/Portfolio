import * as React from "react";
import { useState } from "react";
import SideNav from "./SideNav";

interface IHamburgerMenuProps {}

const HamburgerMenu: React.FunctionComponent<IHamburgerMenuProps> = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="flex flex-col gap-1 md:hidden cursor-pointer"
      >
        <div className="w-8 h-1 bg-teal-300 rounded" />
        <div className="w-8 h-1 bg-teal-300 rounded" />
        <div className="w-8 h-1 bg-teal-300 rounded" />
      </div>
      {open && <SideNav close={() => setOpen(false)} />}
    </>
  );
};

export default HamburgerMenu;
