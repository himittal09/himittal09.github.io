import * as functions from "firebase-functions";
import * as cors from "cors";
import * as nodemailer from "nodemailer";

const corsconfigure = cors({
  origin: true,
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "himittal09@gmail.com",
    pass: "icxkldmpdxiuqfjj",
  },
});

export const sendEmail = functions.https.onRequest((req, res) => {
  corsconfigure(req, res, () => {
    // const dest: string = <string>req.query.dest;
    const name: string = req.body.name;
    const email: string = req.body.email;
    const sub: string = req.body.subject || "Test Subject";
    const query: string = req.body.query;
    const mailOptions = {
      from: `${name} <${email}>`,
      to: "himittal09@gmail.com",
      subject: sub,
      html: `<p style="font-size: 16px;">${query}</p>
            <p>From: ${email}</p>
            <p>Name: ${name}</p>`,
    };
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.status(400).send(erro.toString());
      }
      return res.status(200).send(info);
    });
  });
});
