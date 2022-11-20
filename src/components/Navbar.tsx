import * as React from "react";
import Index from "./Index";
import AnchorLink from "react-anchor-link-smooth-scroll";
interface INavbarProps {}

const NavLink = ({
  number,
  text,
  offset,
}: {
  number: number;
  text: string;
  offset: number;
}) => {
  return (
    <li className="flex gap-2">
      <AnchorLink href={`#${text}`} offset={offset}>
        <Index number={number} size="sm" />{" "}
        <span className="text-slate-400">{text}</span>
      </AnchorLink>
    </li>
  );
};

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <nav className="flex justify-between h-16 px-12 items-center fixed top-0 left-0 w-full   bg-slate-900 font-bold">
      <AnchorLink href={`#Hero`} offset="275">
        <p className="text-teal-400">Noel Vega</p>
      </AnchorLink>

      <ul className="flex gap-8 text-sm items-center gap-">
        <NavLink number={1} text="About" offset={275} />
        <NavLink number={2} text="Experience" offset={275} />
        <NavLink number={3} text="Work" offset={100} />
        <NavLink number={4} text="Contact" />
        <li className="cursor-pointer">
          <button className="border border-teal-400 px-4 py-2 rounded text-teal-400 hover:bg-slate-800">
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
