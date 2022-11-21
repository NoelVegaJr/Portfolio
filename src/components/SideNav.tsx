import Link from "next/link";
import * as React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Index from "./Index";

interface ISideNavProps {
  close: () => void;
}

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

const SideNav: React.FunctionComponent<ISideNavProps> = ({
  close,
}: ISideNavProps) => {
  //   return <div className="fixed w-3/4 bg-slate-800 h-full top-0 left-0"></div>;
  return (
    <div
      onClick={() => close()}
      className="fixed w-full h-full bg-slate-900/80 top-0 left-0"
    >
      <div
        className="fixed w-3/4 h-full bg-slate-800 top-0 left-0 "
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="text-teal-400 font-semibold ">
          <AnchorLink
            className="px-8 py-4 border-b border-b-slate-700 hover:bg-slate-900/50 cursor-pointer w-full block"
            href="#Hero"
            onClick={() => close()}
          >
            Home
          </AnchorLink>
          <AnchorLink
            className="px-8 py-4 border-b border-b-slate-700 hover:bg-slate-900/50 cursor-pointer w-full block"
            href="#About"
            offset={100}
            onClick={() => close()}
          >
            About
          </AnchorLink>
          <AnchorLink
            className="px-8 py-4 border-b border-b-slate-700 hover:bg-slate-900/50 cursor-pointer w-full block"
            href="#Experience"
            offset={100}
            onClick={() => close()}
          >
            Experience
          </AnchorLink>
          <AnchorLink
            className="px-8 py-4 border-b border-b-slate-700 hover:bg-slate-900/50 cursor-pointer w-full block"
            href="#Work"
            offset={90}
            onClick={() => close()}
          >
            Work
          </AnchorLink>
          <AnchorLink
            className="px-8 py-4 border-b border-b-slate-700 hover:bg-slate-900/50 cursor-pointer w-full block"
            href="#Contact"
            offset={180}
            onClick={() => close()}
          >
            Contact
          </AnchorLink>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
