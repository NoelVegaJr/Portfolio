import * as React from "react";

interface IContactProps {}

const Contact: React.FunctionComponent<IContactProps> = (props) => {
  return (
    <section
      id="Contact"
      className="text-center flex flex-col gap-8 max-w-lg mx-auto mb-80"
    >
      <p className="text-teal-300 text-lg ">04. What&apos;s Next?</p>
      <p className="text-5xl text-slate-300 font-bold">Get In Touch</p>
      <p className="text-slate-400">
        I am currently looking for an opportunity for a software developer
        position on a team which values hard work and communication.If you have
        any questions please feel free to reach out and I should get back to you
        within 12 hours. Thanks for visiting 😄💖
      </p>
      <button className="border font-semibold border-teal-400 px-8 p-4 text-teal-400 w-fit rounded hover:bg-slate-800 mx-auto">
        Say Hello
      </button>
    </section>
  );
};

export default Contact;
