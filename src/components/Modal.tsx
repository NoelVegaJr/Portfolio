import * as React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import ContactForm from "./ContactForm";

interface IModalProps {
  close: () => void;
}

interface IBackDropProps {
  close: () => void;
  children: JSX.Element | JSX.Element[];
}

const BackDrop = ({ children, close }: IBackDropProps) => {
  return createPortal(
    <div
      onClick={(e) => {
        e.stopPropagation();
        close();
      }}
      className="fixed h-screen w-full bg-slate-900/90 top-0 left-0 z-50 flex justify-center items-center border"
    >
      {children}
    </div>,
    document.getElementById("__next")!
  );
};

const Modal: React.FunctionComponent<IModalProps> = ({ close }) => {
  return (
    <BackDrop close={close}>
      <div onClick={(e) => e.stopPropagation()} className="max-w-md grow">
        <ContactForm close={close} />
      </div>
    </BackDrop>
  );
};

export default Modal;
