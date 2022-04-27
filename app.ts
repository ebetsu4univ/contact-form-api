import * as express from 'express';
import * as sgMail from '@sendgrid/mail';
import { hostName, port, univArr, juniorUnivArr } from './config';

const app = express();

app.use('/', express.static(__dirname + '/public'));
app.use(express.json());

app.post('/auth/', (req, res) => {
  const pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
  const email = req.body.email;
  if (pattern.test(email)) {
    if (isAcademicEmail(email)) {
      sendEmail(email);
      res.status(200).json({msg: '指定のメールアドレスへ招待URL送信しました'});
    } else {
      res.status(400).json({msg: '学校のメールアドレスを入力してください'});
    }
  } else {
    res.status(400).json({msg: 'メールアドレスとして不適切です'});
  }
});

app.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});

const sendEmail = (recipient: string) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

  const msg = {
    to: recipient,
    from: 'mryuu.dev@gmail.com',
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
};

const isAcademicEmail = (email: string): boolean => {
  const emailArr = email.split('.').slice(-2);
  if (emailArr[0] == 'ac' && emailArr[1] == 'jp') {
    return true;
  } else {
    if (univArr.includes(email) || juniorUnivArr.includes(email)) {
      return true;
    }
    return false;
  }
}