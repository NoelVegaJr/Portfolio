import * as React from "react";
import ContactForm from "../components/ContactForm";

interface IEmailProps {}

function sendEmail() {
  fetch("api/email")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

const Email: React.FunctionComponent<IEmailProps> = (props) => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default Email;
