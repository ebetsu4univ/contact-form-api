import * as express from 'express';
import * as sgMail from '@sendgrid/mail';
import { hostName, port } from './config';

const app = express();

app.use('/', express.static(__dirname + '/public'));

app.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});

/*
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const msg = {
  to: 'pianomann0124@gmail.com', // Change to your recipient
  from: 'mryuu.dev@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail.send(msg)
  .then(() => {
    console.log('Email sent');
  })
  .catch((error) => {
    console.error(error);
  });
*/