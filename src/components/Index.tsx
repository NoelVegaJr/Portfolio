import * as React from "react";

interface IIndexProps {}

const Index = ({ number, size }: { number: number; size: string }) => {
  return <span className={`text-teal-400 ${size}`}>0{number}.</span>;
};

export default Index;
