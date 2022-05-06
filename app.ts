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

  const discordURL = process.env.DISCORD_INVITATION_URL;
  const msg = {
    to: recipient,
    from: 'sano@4u.fukuts.com',
    subject: '【4大学コミュニティー】Discordへの招待URLをお送りします',
    text: '※ このメールはシステムからの自動返信です. こんにちわ! 江別４大学コミュニティ(E4U)です. この度は, 私達に興味を持ってくださりありがとうございます. Discordへの招待URLは下記になります. 招待URL: ' + discordURL + 'では, Discordにてお会いしましょう. この度はご連絡いただき誠にありがとうございました. ※ 添付の招待URLが期限切れ等の理由で無効だった場合は, 大変申し訳ございませんが江別4大学コミュニティー公式Twitterまでご連絡いただければ幸いです.',
    html: "※ このメールはシステムからの自動返信です.<br><br>こんにちわ! 江別４大学コミュニティ(E4U)です.<br>この度は, 私達に興味を持ってくださりありがとうございます.<br><br>Discordへの招待URLは下記になります.<br>招待URL: " + discordURL  + "<br><br>では, Discordにてお会いしましょう.<br>この度はご連絡いただき誠にありがとうございました.<br><br>※ 添付の招待URLが期限切れ等の理由で無効だった場合は, 大変申し訳ございませんが<a href='https://twitter.com/Ebetsu_4U'>江別4大学コミュニティー公式Twitter</a>までご連絡いただければ幸いです.",
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