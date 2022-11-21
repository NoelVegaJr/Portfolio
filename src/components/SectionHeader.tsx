import * as React from "react";
import Index from "./Index";

interface ISectionHeaderProps {
  number: number;
  title: string;
}

const SectionHeader: React.FunctionComponent<ISectionHeaderProps> = ({
  number,
  title,
}: ISectionHeaderProps) => {
  return (
    <header className="flex items-center gap-12 mb-10">
      <div className="flex gap-4">
        <Index number={number} size=" text-xl md:text-2xl" />{" "}
        <span className="font-bold text-slate-300 text-2xl">{title}</span>
      </div>
      <div className="hidden md:block h-0.5 grow bg-orange-400" />
    </header>
  );
};

export default SectionHeader;
