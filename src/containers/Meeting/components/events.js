import moment from 'moment';

const year = moment().format('YYYY');
const mounth = moment().format('MM') - 1;
const prevMounth = mounth - 1;
const nextMounth = mounth + 1;

export default [
  {
    id: 0,
    meetingId:"85746065",
    schedule_for:"ajXp112QmuoKj4854875",
    agenda:"会社のための会議",
    duration:60,
    pre_schedule:true,
    password:"LN2swsar",
    template_id:25,
    title: '終日イベント非常に長いタイトル',
    topic: '終日イベント非常に長いタイトル',
    registrants:[
      {first_name:"ユーザ 名 1",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 2",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 3",last_name:"ユーザ 名"}
    ],
    start: new Date(year, mounth, 0),
    end: new Date(year, mounth, 1),
    priority: 'high',
  },
  {
    id: 1,
    meetingId:"85746065",
    schedule_for:"ajXp112QmuoKj4854875",
    agenda:"会社のための会議",
    duration:60,
    pre_schedule:true,
    password:"LN2swsar",
    template_id:25,
    timezone:"Asia/Tokyo",
    title: 'ドラゴンからの脱出',
    topic: 'ドラゴンからの脱出',
    registrants:[
      {first_name:"ユーザ 名 1",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 2",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 3",last_name:"ユーザ 名"}
    ],
    start: new Date(year, prevMounth, 7, 12, 0, 0),
    end: new Date(year, prevMounth, 10),
    priority: 'high',
  },

  {
    id: 2,
    meetingId:"85746065",
    schedule_for:"ajXp112QmuoKj4854875",
    agenda:"会社のための会議",
    duration:60,
    pre_schedule:true,
    password:"LN2swsar",
    template_id:25,
    timezone:"Asia/Tokyo",
    title: 'DTS STARTS',
    topic: 'DTS STARTS',
    registrants:[
      {first_name:"ユーザ 名 1",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 2",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 3",last_name:"ユーザ 名"}
    ],
    start: new Date(year, nextMounth, 13, 0, 0, 0),
    end: new Date(year, nextMounth, 20, 0, 0, 0),
    priority: 'high',
  },

  {
    id: 3,
    meetingId:"85746065",
    schedule_for:2,
    agenda:"会社のための会議",
    duration:60,
    pre_schedule:true,
    password:"LN2swsar",
    template_id:25,
    timezone:"Asia/Tokyo",
    title: 'DTS ENDS',
    topic: 'DTS ENDS',
    registrants:[
      {first_name:"ユーザ 名 1",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 2",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 3",last_name:"ユーザ 名"}
    ],
    start: new Date(year, 11, 6, 0, 0, 0),
    end: new Date(year, 11, 13, 0, 0, 0),
    priority: 'high',
  },

  {
    id: 4,
    meetingId:"85746065",
    schedule_for:"ajXp112QmuoKj4854875",
    agenda:"会社のための会議",
    duration:60,
    pre_schedule:true,
    password:"LN2swsar",
    template_id:25,
    timezone:"Asia/Tokyo",
    title: '鍛冶屋を探す',
    topic: '鍛冶屋を探す',
    registrants:[
      {first_name:"ユーザ 名 1",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 2",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 3",last_name:"ユーザ 名"}
    ],
    start: new Date(year, prevMounth, 9, 0, 0, 0),
    end: new Date(year, prevMounth, 9, 0, 0, 0),
    priority: 'family',
  },
  {
    id: 5,
    meetingId:"85746065",
    schedule_for:"ajXp112QmuoKj4854875",
    agenda:"会社のための会議",
    duration:60,
    pre_schedule:true,
    password:"LN2swsar",
    template_id:25,
    timezone:"Asia/Tokyo",
    title: '王女についてもっと知る',
    topic: '王女についてもっと知る',
    registrants:[
      {first_name:"ユーザ 名 1",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 2",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 3",last_name:"ユーザ 名"}
    ],
    start: new Date(year, mounth, 11),
    end: new Date(year, mounth, 13),
    priority: 'high',
  },
  {
    id: 6,
    meetingId:"85746065",
    schedule_for:2,
    agenda:"会社のための会議",
    duration:60,
    pre_schedule:true,
    password:"LN2swsar",
    template_id:25,
    timezone:"Asia/Tokyo",
    title: '新着メールを受け取る',
    topic: '新着メールを受け取る',
    registrants:[
      {first_name:"ユーザ 名 1",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 2",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 3",last_name:"ユーザ 名"}
    ],
    start: new Date(year, prevMounth, 12, 10, 30, 0, 0),
    end: new Date(year, prevMounth, 12, 12, 30, 0, 0),
    priority: 'non',
  },
  {
    id: 7,
    meetingId:"85746065",
    schedule_for:"ajXp112QmuoKj4854875",
    agenda:"会社のための会議",
    duration:60,
    pre_schedule:true,
    password:"LN2swsar",
    template_id:25,
    timezone:"Asia/Tokyo",
    title: 'グールとの昼食',
    topic: 'グールとの昼食',
    registrants:[
      {first_name:"ユーザ 名 1",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 2",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 3",last_name:"ユーザ 名"}
    ],
    start: new Date(year, mounth, 12, 12, 0, 0, 0),
    end: new Date(year, mounth, 12, 13, 0, 0, 0),
    priority: 'non',
  },
  {
    id: 8,
    meetingId:"85746065",
    schedule_for:"ajXp112QmuoKj4854875",
    agenda:"会社のための会議",
    duration:60,
    pre_schedule:true,
    password:"LN2swsar",
    template_id:25,
    timezone:"Asia/Tokyo",
    title: 'ミーティング',
    topic: 'ミーティング',
    registrants:[
      {first_name:"ユーザ 名 1",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 2",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 3",last_name:"ユーザ 名"}
    ],
    start: new Date(year, mounth, 12, 14, 0, 0, 0),
    end: new Date(year, mounth, 12, 15, 0, 0, 0),
    priority: 'high',
  },
  {
    id: 9,
    meetingId:"85746065",
    schedule_for:2,
    agenda:"会社のための会議",
    duration:60,
    password:"LN2swsar",
    pre_schedule:true,
    template_id:25,
    timezone:"Asia/Tokyo",
    title: '従者の訓練',
    topic: '従者の訓練',
    registrants:[
      {first_name:"ユーザ 名 1",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 2",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 3",last_name:"ユーザ 名"}
    ],
    start: new Date(year, prevMounth, 12, 17, 0, 0, 0),
    end: new Date(year, prevMounth, 12, 17, 30, 0, 0),
    priority: 'family',
  },
  {
    id: 10,
    meetingId:"85746065",
    schedule_for:"ajXp112QmuoKj4854875",
    agenda:"会社のための会議",
    duration:60,
    pre_schedule:true,
    password:"LN2swsar",
    template_id:25,
    timezone:"Asia/Tokyo",
    title: 'キングとの夕食',
    topic: 'キングとの夕食',
    registrants:[
      {first_name:"ユーザ 名 1",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 2",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 3",last_name:"ユーザ 名"}
    ],
    start: new Date(year, mounth, 12, 20, 0, 0, 0),
    end: new Date(year, mounth, 12, 21, 0, 0, 0),
    priority: 'non',
  },
  {
    id: 11,
    meetingId:"85746065",
    schedule_for:2,
    agenda:"会社のための会議",
    duration:60,
    pre_schedule:true,
    password:"LN2swsar",
    template_id:25,
    timezone:"Asia/Tokyo",
    title: '決闘',
    topic: '決闘',
    registrants:[
      {first_name:"ユーザ 名 1",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 2",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 3",last_name:"ユーザ 名"}
    ],
    start: new Date(year, prevMounth, 13, 7, 0, 0),
    end: new Date(year, prevMounth, 13, 10, 30, 0),
    priority: 'family',
  },
  {
    id: 12,
    meetingId:"85746065",
    schedule_for:"ajXp112QmuoKj4854875",
    agenda:"会社のための会議",
    duration:60,
    pre_schedule:true,
    password:"LN2swsar",
    template_id:25,
    timezone:"Asia/Tokyo",
    title: '仮面舞踏会',
    topic: '仮面舞踏会',
    registrants:[
      {first_name:"ユーザ 名 1",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 2",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 3",last_name:"ユーザ 名"}
    ],
    start: new Date(year, mounth, 17, 19, 30, 0),
    end: new Date(year, mounth, 18, 2, 0, 0),
    priority: 'family',
  },
  {
    id: 13,
    meetingId:"85746065",
    schedule_for:"ajXp112QmuoKj4854875",
    agenda:"会社のための会議",
    duration:60,
    pre_schedule:true,
    password:"LN2swsar",
    template_id:25,
    timezone:"Asia/Tokyo",
    title: 'ドラゴンからプリンセスを救う',
    topic: 'ドラゴンからプリンセスを救う',
    registrants:[
      {first_name:"ユーザ 名 1",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 2",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 3",last_name:"ユーザ 名"}
    ],
    start: new Date(year, nextMounth, 20, 19, 30, 0),
    end: new Date(year, nextMounth, 22, 2, 0, 0),
    priority: 'high',
  },
  {
    id: 14,
    meetingId:"85746065",
    schedule_for:2,
    agenda:"会社のための会議",
    duration:60,
    pre_schedule:true,
    password:"LN2swsar",
    template_id:25,
    timezone:"Asia/Tokyo",
    title: '魔法に関する情報を探す',
    topic: '魔法に関する情報を探す',
    registrants:[
      {first_name:"ユーザ 名 1",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 2",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 3",last_name:"ユーザ 名"}
    ],
    start: new Date(year, mounth, 9, 0, 0, 0),
    end: new Date(year, mounth, 11, 0, 0, 0),
    priority: 'non',
  },
  {
    id: 15,
    meetingId:"85746065",
    schedule_for:"ajXp112QmuoKj4854875",
    agenda:"会社のための会議",
    duration:60,
    pre_schedule:true,
    password:"LN2swsar",
    template_id:25,
    timezone:"Asia/Tokyo",
    title: '結婚式でドラゴンと一緒に飲み物を手に入れよう',
    topic: '結婚式でドラゴンと一緒に飲み物を手に入れよう',
    registrants:[
      {first_name:"ユーザ 名 1",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 2",last_name:"ユーザ 名"},
      {first_name:"ユーザ 名 3",last_name:"ユーザ 名"}
    ],
    start: new Date(year, prevMounth, 26, 0, 0, 0),
    end: new Date(year, prevMounth, 26, 0, 0, 0),
    priority: 'non',
  },
];
