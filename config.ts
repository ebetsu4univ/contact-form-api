export const hostName = '0.0.0.0';
export const port = process.env.PORT != null ? parseInt(process.env.PORT) : 5000;

// https://so-zou.jp/software/tech/network/domain/ac-jp.htm
export const univArr = ['naist.jp', 'pref.chiba.lg.jp', 'hgu.jp', 'hirosakiuhw.jp', 'fujidai.net', 'shokei.jp', 'sendaidaigaku.jp', 't-bunkyo.jp', 'nihonwellness.jp', 'hakuoh.jp', 'seigakuin.jp', 'nihonyakka.jp', 'seitoku.jp', 'kait.jp', 'hamayaku.jp', 'takachiho.jp', 'tamagawa.jp', 'tjk.jp', 'tyg.jp', 'kyoiku-u.jp', 'bbt.ac', 'waseda.jp', 'min.jp', 'seisen-jc.jp', 'gijodai.jp', 'asu-g.net', 'ngu.jp', 'biwako-seikei.jp', 'kyoto-msc.jp', 'ritsumei.jp', 'univ.osaka-seikei.jp', 'jonan.jp', 'naragakuen-u.jp', 'kiui.jp', 'hue.jp', 'frontier-u.jp', 'scu-exam.com', 'oist.jp'];
export const juniorUnivArr = ['hirosakiuhw.jp', 't-bunkyo.jp', 'sakuranoseibo.jp', 'sanotan.jp', 'ns.niitan.jp', 'saitamatoho.jp', 'seitoku.jp', 'kokutan.net', 'nitobebunka.jp', 'matsutan.jp', 'f-gh.jp', 'asu-tsukyo.sua.jp', 'nfcc-nagoya.com', 'owjc.jp', 'osaka-shinai.jp', 'tandai.osaka-seikei.jp', 'sakuyo.hisc.co.jp', 'nkjc.jp', 'd-b.ne.jp'];

export const ALLOWED_ORIGINS = ['https://ebetsu4univ.github.io',];
export const ALLOWED_METHODS = [
  'GET',
  'POST',
  'PUT',
  'PATCH',
  'DELETE',
  'HEAD',
  'OPTIONS'
];