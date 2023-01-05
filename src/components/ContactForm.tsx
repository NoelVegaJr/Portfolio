import * as React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { totalmem } from "os";
import { json } from "stream/consumers";

async function sendEmail(contactInfo: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const response = await fetch("api/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactInfo),
  });
  const data = await response.json();
  return data;
}

interface IContactFormProps {
  close: () => void;
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactForm: React.FunctionComponent<IContactFormProps> = ({ close }) => {
  return (
    <Formik
      initialValues={{ name: "", email: "", subject: "", message: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(32, "exceeded 32 char limit")
          .required("required"),
        email: Yup.string().email().required("required"),
        phone: Yup.string()
          .matches(phoneRegExp, "Phone number is not valid")
          .required("required"),
        subject: Yup.string()
          .max(100, "exceeded 100 char limit")
          .required("required"),
        message: Yup.string()
          .max(10000, "exceeded 10000 char limit")
          .required("required"),
      })}
      onSubmit={async (values: any) => {
        const response = await sendEmail(values);
        console.log("response: ", response);
        if (response.statusCode === 202) {
          close();
          toast.success("Email sent! Thanks for stopping by 😇");
        } else {
          toast.error("Email failed to send, try again");
        }
      }}
    >
      {(props: any) => {
        console.log("disabled: ", props.isValid);
        return (
          <Form className="bg-slate-900  p-8 rounded-lg max-w-5xl border border-slate-800 drop-shadow-2xl">
            <p className="text-white text-2xl mb-6">Contact Form</p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="text-white" htmlFor="name">
                  Name
                </label>
                <Field
                  className="text-black outline-none rounded p-1"
                  name="name"
                  type="text"
                />
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="name" />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-white" htmlFor="email">
                  Email
                </label>
                <Field
                  className="text-black outline-none rounded p-1"
                  name="email"
                  type="email"
                />
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-white" htmlFor="phone">
                  Phone
                </label>
                <Field
                  className="text-black outline-none rounded p-1"
                  name="phone"
                  type="phone"
                />
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="phone" />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-white" htmlFor="subject">
                  Subject
                </label>
                <Field
                  className="text-black outline-none rounded p-1"
                  name="subject"
                  type="text"
                />

                <div className="text-red-500 text-xs">
                  <ErrorMessage name="subject" />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-white" htmlFor="message">
                  Message
                </label>
                <Field
                  name="message"
                  type="textarea"
                  className="text-black outline-none rounded p-1"
                >
                  {({ field, form, meta }: any) => {
                    return (
                      <div>
                        <textarea
                          rows={10}
                          cols={50}
                          className="p-1 rounded outline-none"
                          {...field}
                        />
                        {meta.touched && meta.error && (
                          <div className="text-red-500 text-xs">
                            {meta.error}
                          </div>
                        )}
                      </div>
                    );
                  }}
                </Field>
              </div>

              <button
                type="submit"
                className="border border-teal-300 rounded p-2 text-teal-300"
                disabled={!props.isValid || !props.dirty}
              >
                Send
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
