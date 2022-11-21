import * as React from "react";

interface IHamburgerMenuProps {}

const HamburgerMenu: React.FunctionComponent<IHamburgerMenuProps> = (props) => {
  return (
    <div className="flex flex-col gap-1 md:hidden">
      <div className="w-8 h-1 bg-teal-300 rounded" />
      <div className="w-8 h-1 bg-teal-300 rounded" />
      <div className="w-8 h-1 bg-teal-300 rounded" />
    </div>
  );
};

export default HamburgerMenu;
