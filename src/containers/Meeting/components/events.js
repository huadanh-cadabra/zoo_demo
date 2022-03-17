import moment from 'moment';

const year = moment().format('YYYY');
const mounth = moment().format('MM') - 1;
const prevMounth = mounth - 1;
const nextMounth = mounth + 1;

export default [
  {
    id: 0,
    title: '終日イベント非常に長いタイトル',
    allDay: true,
    start: new Date(year, mounth, 0),
    end: new Date(year, mounth, 1),
    priority: 'high',
  },
  {
    id: 1,
    title: 'ドラゴンからの脱出',
    start: new Date(year, prevMounth, 7, 12, 0, 0),
    end: new Date(year, prevMounth, 10),
    priority: 'high',
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(year, nextMounth, 13, 0, 0, 0),
    end: new Date(year, nextMounth, 20, 0, 0, 0),
    priority: 'high',
  },

  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(year, 11, 6, 0, 0, 0),
    end: new Date(year, 11, 13, 0, 0, 0),
    priority: 'high',
  },

  {
    id: 4,
    title: '鍛冶屋を探す',
    start: new Date(year, prevMounth, 9, 0, 0, 0),
    end: new Date(year, prevMounth, 9, 0, 0, 0),
    priority: 'family',
  },
  {
    id: 5,
    title: '王女についてもっと知る',
    start: new Date(year, mounth, 11),
    end: new Date(year, mounth, 13),
    priority: 'high',
  },
  {
    id: 6,
    title: '新着メールを受け取る',
    start: new Date(year, prevMounth, 12, 10, 30, 0, 0),
    end: new Date(year, prevMounth, 12, 12, 30, 0, 0),
    priority: 'non',
  },
  {
    id: 7,
    title: 'グールとの昼食',
    start: new Date(year, mounth, 12, 12, 0, 0, 0),
    end: new Date(year, mounth, 12, 13, 0, 0, 0),
    priority: 'non',
  },
  {
    id: 8,
    title: 'ミーティング',
    start: new Date(year, mounth, 12, 14, 0, 0, 0),
    end: new Date(year, mounth, 12, 15, 0, 0, 0),
    priority: 'high',
  },
  {
    id: 9,
    title: '従者の訓練',
    start: new Date(year, prevMounth, 12, 17, 0, 0, 0),
    end: new Date(year, prevMounth, 12, 17, 30, 0, 0),
    priority: 'family',
  },
  {
    id: 10,
    title: 'キングとの夕食',
    start: new Date(year, mounth, 12, 20, 0, 0, 0),
    end: new Date(year, mounth, 12, 21, 0, 0, 0),
    priority: 'non',
  },
  {
    id: 11,
    title: '決闘',
    start: new Date(year, prevMounth, 13, 7, 0, 0),
    end: new Date(year, prevMounth, 13, 10, 30, 0),
    priority: 'family',
  },
  {
    id: 12,
    title: '仮面舞踏会',
    start: new Date(year, mounth, 17, 19, 30, 0),
    end: new Date(year, mounth, 18, 2, 0, 0),
    priority: 'family',
  },
  {
    id: 13,
    title: 'ドラゴンからプリンセスを救う',
    start: new Date(year, nextMounth, 20, 19, 30, 0),
    end: new Date(year, nextMounth, 22, 2, 0, 0),
    priority: 'high',
  },
  {
    id: 14,
    title: '魔法に関する情報を探す',
    start: new Date(year, mounth, 9, 0, 0, 0),
    end: new Date(year, mounth, 11, 0, 0, 0),
    priority: 'non',
  },
  {
    id: 14,
    title: '結婚式でドラゴンと一緒に飲み物を手に入れよう',
    start: new Date(year, prevMounth, 26, 0, 0, 0),
    end: new Date(year, prevMounth, 26, 0, 0, 0),
    priority: 'non',
  },
];
