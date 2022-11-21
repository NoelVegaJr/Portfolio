import { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

  const msg = {
    to: "noeljr126@gmail.com",
    from: "noeljr126@gmail.com",
    subject: req.body.subject,
    text: "body",
    html: `<div>
      <p><strong>Name:<strong> ${req.body.name}</p>
      <p><strong>Email:<strong> ${req.body.email}</p>
      <p><strong>message:<strong><br/>${req.body.message}</p>
    </div>`,
  };
  const response = await sendgrid.send(msg);

  return res.status(response[0].statusCode);
}
